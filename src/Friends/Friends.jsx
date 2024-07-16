import React, { useState } from 'react';
import './Friends.css'; // Importing the CSS file for styling

import Home from './Home';
import Chat from './Chat';
import FriendsContent from './FriendsContent';
import Qr from './Qr';
import Navbar from '../Components/Navbar';

const Friends = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />; // Render the Home component
      case 'chat':
        return <Chat />; // Render the Chat component
      case 'friends':
        return <FriendsContent />; // Render the Friends component
      default:
        return <Qr />; // Default to Home component
    }
  };

  return (
    <>
    <Navbar/>

    <div className="container">
      <div className="sidebar">
        <div className="logoContainer" onClick={() => setActiveTab('home')}>
        
          <span className="text"> 🏠︎</span>
        </div>
        <div className="logoContainer" onClick={() => setActiveTab('chat')}>
       
          <span className="text"> ✉︎</span>
        </div>
        <div className="logoContainer" onClick={() => setActiveTab('friends')}>
        
          <span className="text">🫂</span>
        </div>
        <div className="logoContainer" onClick={() => setActiveTab('settings')}>
         
          <span className="text">Qr</span>
        </div>
      </div>
      <div className="contentContainer">
        {renderContent()}
      </div>
    </div>
    </>
  );
};

export default Friends;
