import React, { useState, useEffect } from "react"
import "./commits.css"

const Commits = ({ user, search }) => {
    console.log(user)
    console.log(search)
    console.log(user.name)
    const [commit, setCommit] = useState([])



    useEffect(() => {
        const fetchCommit = async () => {
            const response = await fetch(`/netflix-repo-commits/${user.name}`);
            const data = await response.json()
            console.log(data)
            setCommit(data)
        }
        fetchCommit()
    }, [user])

    useEffect(() => {
        console.log(commit)
    }, [commit])

    return (
        <>
            {(commit.length === 0) ? (
                <p>Loading</p>
            ) : <div>
                {commit.map((committee, i) => (
                    <div className="commit-part">
                        <p key={i}>Commit Message: {committee.commit.message} </p>
                        <p key={i}>Commit Name: {committee.commit.committer.name} </p>
                        <p key={i}>Commit Hash: {committee.sha} </p>
                        <p key={i}>Date Created: {committee.commit.committer.date} </p>
                    </div>
                ))}
            </div>}

        </>
    )
}

export default Commits
