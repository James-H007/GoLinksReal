import React, { useState } from 'react';
import Commits from '../commits';
import "./tetris.css"


const Tetris = ({ data, result }) => {
    // console.log(data)
    let sortedData
    if (data) {
        sortedData = data.sort((a, b) => b.stargazers_count - a.stargazers_count)
    }

    const [selectedItem, setSelectedItem] = useState(null)
    // console.log(result)
    const search = result

    //When clicked, more information should pop up or go back to normal
    const showItem = (item) => {
        if (selectedItem === item) {
            setSelectedItem(null)
        }
        else {
            setSelectedItem(item)
        }
    }
    return (
        <>
            {((sortedData.length === 0) || (!sortedData)) ? (
                <p>Loading</p>
            ) : (
                <div>
                    <h1>Results for Netflix...</h1>
                    <div>
                        <p className="container">
                            {sortedData.map((user, i) => (
                                <div key={i}
                                    className={`result-part ${selectedItem === user ? 'expanded' : ''}`}
                                    onClick={() => showItem(user)}
                                >
                                    <h2>Name: {user.name}</h2>
                                    <p>Language: {user.language} </p>
                                    <p>Description: {user.description} </p>
                                    <p>Star Count: ⭐ {user.stargazers_count} </p>
                                    <p>Fork Count: {user.forks_count} </p>
                                    <p>Created At: {user.created_at} </p>
                                    {selectedItem === user && (
                                        <Commits search={search} user={user} />
                                    )}
                                </div>
                            ))}</p>
                    </div>
                    <h1></h1>
                </div>
            )}

        </>
    )
}

export default Tetris

//needed
//Repo
