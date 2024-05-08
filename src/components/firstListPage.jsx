import Users from "./firstUsersPage"
const FirstListPage = ({searchResults}) => {
   const results = searchResults.map(user=> <Users key={user.mobile} user={user} />
    )
    //mapping throught the searchResults array and creating plenty Users from it with the help of the Users component
    const content = results?.length ? results : <article><p>No Matching Posts</p></article>
    return <main>{content}</main>
}
export default FirstListPage