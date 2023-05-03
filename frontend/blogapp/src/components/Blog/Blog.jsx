import React from 'react'
import './Blog.css'

function Blog({ id, title, author, body ,handleDelete}) {
  return (
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-author">{author}</h4>
        <p className="card-body">{body}</p>
        <button className="card-btn" onClick={()=>{handleDelete(id)}}>Delete</button>
      </div>
  )
}

export default Blog
