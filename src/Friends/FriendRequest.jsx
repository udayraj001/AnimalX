import React from 'react';
import './FriendRequest.css';

const FriendRequest = ({ friends, onFollow }) => {
  return (
    <div className="friend-requests">
      <h2>Suggestions</h2>
      {friends
        .filter(friend => !friend.followed && !friend.requested)
        .map(friend => (
          <div key={friend.id} className="friend-request">
            <img src={friend.avatar} alt={friend.name} className="avatar" />
            <span>{friend.name}</span>
            <button onClick={() => onFollow(friend.id)}>Follow</button>
          </div>
        ))}
    </div>
  );
};

export default FriendRequest;
