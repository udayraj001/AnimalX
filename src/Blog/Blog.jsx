import React, { useState, useEffect } from 'react';
import './Blog.css';
import Navbar from '../Components/Navbar';

const Blog = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [blogs, setBlogs] = useState([]);

  // Load blogs from localStorage on component mount
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (savedBlogs && savedBlogs.length > 0) {
      setBlogs(savedBlogs);
    }
  }, []);

  const handleCreateBlog = () => {
    if (imageUrl && headline && description) {
      const newBlog = { imageUrl, headline, description };
      setBlogs([...blogs, newBlog]);
      setImageUrl('');
      setHeadline('');
      setDescription('');
      setShowAddBlog(false);
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleRemoveBlog = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  // Save blogs to localStorage whenever blogs state changes
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  return (
    <>
    <Navbar/>
    <div className="blog-container">
      <div className="add-blog-container">
        <button onClick={() => setShowAddBlog(true)} style={{padding:"9px", width:"100px", borderRadius:"1rem", color:"white",backgroundColor:"#31567e",fontSize:"15px", fontWeight:"bold"}}>Add Blog</button>
        {showAddBlog && (
          <div className="add-blog-form">
            <input
              type="text"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              style={{padding:"10px", width:"250px"}}
            />
            <input
              type="text"
              placeholder="Enter headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              style={{padding:"10px", width:"250px"}}
            />
            <textarea
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width:"250px", borderColor:"black", border:"solid", margin:"0", alignItems:"center", justifyContent:"center", paddingTop:"20px"}}
            ></textarea>
            <button onClick={handleCreateBlog} style={{width:"150px", backgroundColor:"#3d63a3", fontWeight:"bold", color:"white"}}>Create</button>
          </div>
        )}
      </div>
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.imageUrl} alt={blog.headline} />
            <h2>{blog.headline}</h2>
            {showFullDescription ? (
              <p>{blog.description}</p>
            ) : (
              <p>{blog.description.slice(0, 100)}...</p>
            )}
            {blog.description.length > 100 && (
              <button onClick={() => setShowFullDescription(!showFullDescription)} style={{borderRadius: "5px"}}> {/* Added border radius */}
                {showFullDescription ? 'Read less' : 'Read more'}
              </button>
            )}
            <button onClick={() => handleRemoveBlog(index)} style={{backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", marginTop: "10px", marginLeft: "10px"}}> {/* Added marginLeft for gap */}
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;
