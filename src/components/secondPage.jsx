import React, {useEffect, useState} from 'react'
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./second.css"
import {getAllUsers} from "../api/axios.js"
const SecondPage = () => {
  const [users, setUsers] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data)
      console.log(data)
      return data
    }).then((data) => {
      setSearchResult(data)
    })
    }, [])
    const handleSubmit = (e) => {
      e.preventDefault()
      setSearchResult(resultsArray(searchInput))
 }
 const handleSearchChange = (e) => { 
  const value = e.target.value.trim()
  const search  = new RegExp(value, "i")
     setSearchInput(value)
     if(!value){
         return setSearchResult(users)
     }else{
         setSearchResult(searchArray(value))
     }
 }
    const searchArray = (search) => {
      //Merge Array without repeating the elements in the array more than once
      const mergeArray = (news, olds) => [...new Set([...news, ...olds])]
      return mergeArray(resultsArray(search), users)
  }
  const resultsArray =  (search) => {
      const resultsArray = users.filter((users) =>users.firstname.includes(search) 
      || users.lastname.includes(search) || users.email.includes(search) || users.mobile.includes(search)
      ) //Returns Boolean
  return resultsArray

  }
    const Users = ({searchResults}) => {
      const results = searchResults.map(user=>
        <tr key={user._id}>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td>{user._id}</td>
      </tr>
       )
       const content = results?.length !== 0 ? results : <h6 className='text-center mt-4'>No Matching User</h6>
       return content
   }
  return <div className='App'>
  <Container>
    <h1 className='text-center mt-4'>Users Database</h1>
    <Form onSubmit={handleSubmit}>
      <InputGroup className="my-3">
        <Form.Control placeholder="Enter Firstname, lastname or phone number" onChange={handleSearchChange} className='form-control'></Form.Control>
        <button style={{backgroundColor : "black", color : "white", border: "none", outline : "none", paddingLeft : "2%", paddingRight : "2%"}}> 
             <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
      </InputGroup>
    </Form>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>User Id</th>
        </tr>
      </thead>
      <tbody>
 <Users searchResults={searchResult}></Users>
      </tbody>
    </Table>
  </Container>

  </div>
  
}

export default SecondPage