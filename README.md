# BlogApp Using FastAPI

This is a full-stack web application that allows users to create and view blog posts. The backend is built using FastAPI, a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints, and the frontend is built using React, a JavaScript library for building user interfaces.

## Backend

### Prerequisites
To run the backend, you need to have the following installed:

* Python 3.7+
*  pip
* virtualenv

#### Installation

* Clone this repository.
* Create a virtual environment: virtualenv venv.
* Activate the virtual environment: source venv/bin/activate (Linux/Mac) or venv\Scripts\activate (Windows).
* Install the required packages: pip install -r requirements.txt.
* Start the backend server: uvicorn main:app --reload.


The backend server will start at 
` http://localhost:8000/. `

## Frontend

### Prerequisites
To run the frontend, you need to have the following installed:

* Node.js
* npm

#### Installation
* Navigate to the frontend directory.
* Install the required packages: npm install.
* Start the frontend server: npm run dev.



The frontend server will start at 
` http://localhost:5173/. `

#### Usage
* Visit http://localhost:5173/ in your web browser.
* Click the "Create a new Blog" button to create a new blog post.
* Fill in the author, title, and body of the blog post, then click "Submit".
* The new blog post will be added to the list of existing blog posts.
* To delete a blog post, click the "Delete" button next to the blog post you want to delete.

## App Preview 
<img width="960" alt="2" src="https://user-images.githubusercontent.com/83918978/235881012-e5c38c92-794a-4f39-bb03-1a5fa331590a.png">
<img width="960" alt="3" src="https://user-images.githubusercontent.com/83918978/235881037-84bf0da9-b7b9-4e66-98ec-2fb325a95667.png">
<img width="960" alt="1" src="https://user-images.githubusercontent.com/83918978/235881056-f8ba280b-56c1-49c2-a019-992e87fa3205.png">
