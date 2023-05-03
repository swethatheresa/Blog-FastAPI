import './App.css'
import {Routes,Route,BrowserRouter,Link} from 'react-router-dom'
import CreateBlog from './components/CreateBlog/CreateBlog'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'

function App() {
  return (
    <div className='home'>
      <BrowserRouter>
        <div className='header'>
          <h1>Blogs</h1>
          <div>
          <Link to='/' className='create-btn' > Home</Link>
          <Link to='/create-blog' className='create-btn' > Create a new Blog</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>  
  )
}

export default App
