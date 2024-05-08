const Users = ({user}) => {
    return <article>
<h2>{user.firstname}</h2>
<p>{user.lastname}</p>
<p>{user.email}</p>
<p>{user.mobile}</p>
<p>{user._id}</p>
    </article>
}
export default Users