import React from 'react'
import { useState, useEffect } from "react";
import './Home.css'
import Blog from '../Blog/Blog'
function Home() {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/blog/")
        .then((response) => response.json())
        .then((data) => setBlogs(data))
        .catch((error) => console.error(error));
        }, []);
        
    const handleDelete = (id) => {
    fetch(`http://localhost:8000/blog/${id}`, { method: 'DELETE' })
      .then(() => {
        setBlogs((blogs) => blogs.filter((blog) => blog._id !== id));
        console.log(`Deleted blog with ID ${id}`);
      })
      .catch((error) => console.error(error));
  };
        
  return (
      <div className="blog-list">
        {blogs.map((blog) => (
        <Blog key={blog._id} id={blog._id} title={blog.title} author={blog.author} body={blog.body} handleDelete={handleDelete} />
        ))}
        </div>
  )
}

export default Home
