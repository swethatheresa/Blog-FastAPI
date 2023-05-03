import React from 'react'
import './CreateBlog.css'
import { useState } from "react";

function CreateBlog() {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
        author: author,
        title: title,
        body: body,
    };
    fetch("http://localhost:8000/blog/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlog),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Do something with the response data
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle the error
    });
    setAuthor("");
    setTitle("");
    setBody("");
};

  return (
    <div className="create-blog">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="body">Body:</label>
                <textarea
                    id="body"
                    name="body"
                    rows="10"
                    placeholder='Write your blog here...'
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>
  )
}

export default CreateBlog
