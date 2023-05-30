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

// app.get('/search', async (req, res) => {
//     console.log("We hit this route")
//     try {
//         //Use req.query to pull out the q, sort, order, per_page, and page
//         const { q, sort, order, per_page, page } = req.query;

//         const response = await octokit.request('GET /search/repositories', {
//             headers: {
//                 'X-GitHub-Api-Version': '2022-11-28',
//             },
//             q,
//             sort,
//             order,
//             per_page,
//             page,
//         });
//         // console.log("Here are the responses", console.log(response))

//         const searchResults = response.data.items;

//         res.json(searchResults);
//     } catch (error) {
//         console.error('Error occurred while fetching search results:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.get('/search/:organization', async (req, res) => {
//     console.log("We hit this route")
//     try {
//         const { q, sort, order, per_page, page } = req.query;
//         const { organization } = req.params
//         const response = await octokit.request(`GET /orgs/${organization}/repos`, {
//             headers: {
//                 'X-GitHub-Api-Version': '2022-11-28',
//             },
//             q,
//             sort,
//             order,
//             per_page,
//             page,

//         })
//         const searchResults = response.data.items;

//         res.json(searchResults);
//     } catch (error) {
//         console.error('Error occurred while fetching search results:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.get('/netflix-repos', async (req, res) => {
//     try {
//         const response = await fetch('https://api.github.com/orgs/Netflix/repos');
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Error occurred while fetching Netflix repositories:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

app.get('/netflix-repos', async (req, res) => {
    console.log("Hit")
    try {
        const octokit = new Octokit({
            auth: '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',
            userAgent: "Your-App",
            baseUrl: "https://api.github.com"
        });

        const response = await octokit.request("GET /orgs/Netflix/repos", {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
            org: "Netflix"
        });

        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error occurred while fetching Netflix repositories:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/netflix-repo-commits/:repo', async (req, res) => {
    console.log("We hit")
    try {
        const { repo } = req.params;

        const octokit = new Octokit({
            auth: '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',
            userAgent: "Your-App",
            baseUrl: "https://api.github.com"
        });

        const endpoint = `/repos/Netflix/${repo}/commits`;
        const response = await octokit.request("GET " + endpoint, {
        });

        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error occurred while fetching Netflix repository commits:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// app.get('/search', async (req, res) => {
//     console.log("We hit this route")
//     try {
//         //Use req.query to pull out the q, sort, order, per_page, and page
//         const { q, sort, order, per_page, page } = req.query;

//         const response = await octokit.request('GET /search/repositories', {
//             headers: {
//                 'X-GitHub-Api-Version': '2022-11-28',
//             },
//             // q,
//             // sort,
//             // order,
//             // per_page,
//             // page,
//         });
//         // console.log("Here are the responses", console.log(response))

//         const searchResults = response.data.items;

//         res.json(searchResults);
//     } catch (error) {
//         console.error('Error occurred while fetching search results:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

app.get('/test', (req, res) => {
    // console.log("Test")
    res.json({ "Here": "We are" })
})

app.listen(5000, () => { console.log("Server started on port 5000") })
