import React, { useState } from 'react';
import './Home.css'; 

const Home = () => {
  const [requests, setRequests] = useState([
    { id: 1, username: 'Henry', avatar: 'https://i.pinimg.com/564x/f1/e3/c8/f1e3c8d788623e040979a95e53275eb2.jpg' },
    { id: 2, username: 'Rock', avatar: 'https://i.pinimg.com/564x/46/d6/4f/46d64f85228f5799c918d6c8f955df2d.jpg' },
    { id: 3, username: 'Jimmy', avatar: 'https://i.pinimg.com/564x/bb/8e/e7/bb8ee77fe40c53f26067a1b2c8ff3ff4.jpg' },
  ]);

  const handleApprove = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    alert(`Approved request from user ${id}`);
  };

  const handleDecline = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    alert(`Declined request from user ${id}`);
  };

  return (
    <div className="home">
      <h2>Follow Requests</h2>
      <div className="requests-grid">
        {requests.map(request => (
          <div key={request.id} className="request-card">
            <img src={request.avatar} alt={`${request.username}'s avatar`} className="avatar" />
            <span>{request.username}</span>
            <div className="actions">
              <button onClick={() => handleApprove(request.id)}>Approve</button>
              <button onClick={() => handleDecline(request.id)}>Decline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
