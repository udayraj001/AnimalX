import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pricing from './Pricing/Pricing';
import Friends from './Friends/Friends';
import Navbar from './Components/Navbar';
import Homepage from './Friends/Homepage';
import Login from './Vaccination/Signin/Login';
import Vaccination from './Vaccination/Vaccination';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';


const Routing = () => {
    return (
      <Router>
        
        {/* <Navbar /> */}
          <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={ <Homepage/>} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/vaccination" element={<Vaccination />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
       
      </Router>

      
    );
  };

export default Routing;
