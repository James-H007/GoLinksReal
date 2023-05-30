const express = require('express')
const { Octokit } = require('@octokit/core');
const app = express()

const octokit = new Octokit({
    auth: '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',
});

app.get("/api", (req, res) => {
    // console.log("We hit this route")
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.get('/search', async (req, res) => {
    console.log("We hit this route")
    try {
        //Use req.query to pull out the q, sort, order, per_page, and page
        const { q, sort, order, per_page, page } = req.query;

        const response = await octokit.request('GET /search/repositories', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
            q,
            sort,
            order,
            per_page,
            page,
        });
        // console.log("Here are the responses", console.log(response))

        const searchResults = response.data.items;

        res.json(searchResults);
    } catch (error) {
        console.error('Error occurred while fetching search results:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/test', (req, res) => {
    // console.log("Test")
    res.json({ "Here": "We are" })
})

app.listen(5000, () => { console.log("Server started on port 5000") })
