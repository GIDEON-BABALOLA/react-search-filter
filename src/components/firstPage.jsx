import React, {useState, useEffect} from 'react'
import "./first.css"
import { getAllUsers } from '../api/axios'
import FirstSearchBar from './firstSearchBar'
import FirstListPage from './firstListPage'
const FirstPage = () => {
    const [users, setUsers] = useState([])
    const [searchResults, setSearchResults] = useState([])
    useEffect(()=> {     
getAllUsers().then((data)=> {
    setUsers(data)              

    return data
}).then((data) => {
    setSearchResults(data)
})
    }, [])
  return<div style={{backgroundColor : "black", fontSize : "1.5rem"}}>
    <FirstSearchBar users={users} setSearchResult={setSearchResults}/>
    <FirstListPage searchResults={searchResults}></FirstListPage>
  </div>
}

export default FirstPage