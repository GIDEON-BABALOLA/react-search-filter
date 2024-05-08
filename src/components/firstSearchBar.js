import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const FirstSearchBar = ({users, setSearchResult}) => {
    const [searchInput, setSearchInput] = useState("")
    const handleSubmit = (e) => {
         e.preventDefault()
         setSearchResult(resultsArray(searchInput))
    }
    const handleSearchChange = (e) => { 
        const value = e.target.value.trim()
        // const search  = new RegExp(value, "i")
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
    const resultsArray = (search) => {
        console.log(users.length)
        console.log(users[0].firstname)
        const resultsArray = users.filter((user) => user.firstname.includes(search) 
        || user.lastname.includes(search) || user.email.includes(search) || user.mobile.includes(search)
     ) //Returns Boolean
    return resultsArray

    }
  return <header>
    <form className='search' onSubmit={handleSubmit}>
        <input className='search__input' type="text" onChange={handleSearchChange} value={searchInput}></input>
        <button className='search__button'>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
    </form>
  </header>
}

export default FirstSearchBar