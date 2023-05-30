import React, { useEffect, useState } from 'react'
import Tetris from './components/tetris'
import { Route, Routes, useNavigate } from "react-router-dom"
import "./App.css"

function App() {

  const [backendData, setBackendData] = useState({})
  const [searchData, setSearchData] = useState([])
  const [searchQuery, setSearchQuery] = useState("") //State for the search query

  const navigate = useNavigate()
  useEffect(() => {
    // fetch("/api").then(
    //   response => response.json()
    // ).then(
    //   data => {
    //     setBackendData(data)
    //   }
    // )

    //Fetching Data Example
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setBackendData(data)
    }

    //Fetching and querying based on our search
    const fetchSearch = async () => {
      const response = await fetch("/netflix-repos");
      const data = await response.json()
      console.log(data)
      setSearchData(data)
    }


    fetchData();

    fetchSearch()


  }, [searchQuery])

  const handleSearch = (e) => {
    e.preventDefault();
    //Grab from the input field
    const query = e.target.elements.search.value
    setSearchQuery(query)

    navigate(`/search`)
  }

  return (
    <div>
      {/* {(typeof backendData.users === 'undefined') ? (
        <p>Loading</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )} */}


      <div className='search-bar-area'>
        <form onSubmit={handleSearch} className='search-bar'>

          <input type="text" name="search" placeholder='Search...' className='search-text' />
          <button type="submit" className='search-button'>Search</button>
        </form>
      </div>
      {/* <Routes>
        <Route path="/search" element={<Tetris data={searchData} result={searchQuery} />} />
      </Routes> */}
      <Tetris data={searchData} />
    </div>
  )
}

export default App
