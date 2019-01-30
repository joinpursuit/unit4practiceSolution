import React from 'react';
import '../../css/Users.css'

export const UserPosts = (props) => {
  if(!props.users.length || !props.posts.length) return null;
  let user = props.users.find(user => user.id === Number(props.match.params.id))
  let displayPosts = props.posts.map(post => {
    if(post.userId === user.id) {
      return(
        <li key={post.id}>
          TITLE: {post.title}
          <br />
          BODY: {post.body}
        </li>
      )
    } else {
      return null
    }
  })
  return(
    <div className="users">
      <h1>USER NAME: {user.name} </h1>
      <ul>
      {displayPosts}
      </ul>
    </div>
  )
}
