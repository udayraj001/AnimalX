import React from 'react';
import './FriendList.css';

const FriendList = ({ friends, onAccept }) => {
  return (
    <div className="friend-list">
      <h2>Follow Requests</h2>
      {friends
        .filter(friend => friend.requested && !friend.followed)
        .map(friend => (
          <div key={friend.id} className="friend-item">
            <img src={friend.avatar} alt={friend.name} className="avatar" />
            <span>{friend.name}</span>
            <button onClick={() => onAccept(friend.id)}>Accept</button>
          </div>
        ))}
      <h2>Following</h2>
      {friends
        .filter(friend => friend.followed)
        .map(friend => (
          <div key={friend.id} className="friend-item">
            <img src={friend.avatar} alt={friend.name} className="avatar" />
            <span>{friend.name}</span>
          </div>
        ))}
    </div>
  );
};

export default FriendList;
