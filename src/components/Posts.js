import React from 'react';
import '../css/Posts.css'

export const Posts = ({posts, comments, users}) => {
  if(!users.length || !posts.length || !comments.length) {
    return null
  }
  let displayPosts = posts.map(post => {
      let foundUser = users.find(user => user.id === post.userId)
      let displayComments = comments.map(comment => {
      if(comment.postId === post.id) {
        return <li key={comment.id}>{comment.body} </li>
      } else {
        return null
      }
    })
    return(
      <li key={post.id}>
        POST NAME: {post.title}
        <br/>
         BODY: {post.body}
         <br/>
         USER: {foundUser.name}
         <ol>
          {displayComments}
         </ol>
      </li>
    )
  })
  return(
    <div className="posts">
      <h1>POSTS PAGE</h1>
      <ul >
      {displayPosts}
      </ul>
      </div>
  )
}
