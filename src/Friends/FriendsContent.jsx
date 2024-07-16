import React, { useState, useEffect } from 'react';
import './FriendsContent.css';

const friendsData = [
  { name: 'Ross Geller', details: 'A paleontologist with a Ph.D.' },
  { name: 'Rachel Green', details: 'A fashion enthusiast working at Ralph Lauren.' },
  { name: 'Monica Geller', details: 'A chef and a neat freak.' },
  { name: 'Chandler Bing', details: 'Works in statistical analysis and data reconfiguration.' },
  { name: 'Phoebe Buffay', details: 'A quirky masseuse and musician.' },
  { name: 'Joey Tribbiani', details: 'An actor and food lover.' },
];

const FriendsContent = () => {
  const [friends, setFriends] = useState(friendsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [newFriend, setNewFriend] = useState({ name: '', details: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingFriend, setEditingFriend] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
  };

  const handleCloseModal = () => {
    setSelectedFriend(null);
    setIsEditing(false);
  };

  const handleRandomFriend = () => {
    const randomFriend = friends[Math.floor(Math.random() * friends.length)];
    setSelectedFriend(randomFriend);
  };

  const toggleFavorite = (friend) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(friend.name)) {
        return prevFavorites.filter((fav) => fav !== friend.name);
      } else {
        return [...prevFavorites, friend.name];
      }
    });
  };

  const handleAddFriend = () => {
    if (newFriend.name && newFriend.details) {
      setFriends((prevFriends) => [...prevFriends, newFriend]);
      setNewFriend({ name: '', details: '' });
      setNotification({ type: 'success', message: 'Friend added successfully!' });
    } else {
      setNotification({ type: 'error', message: 'Please fill out all fields.' });
    }
  };

  const handleEditFriend = (friend) => {
    setIsEditing(true);
    setEditingFriend(friend);
    setNewFriend(friend);
  };

  const handleUpdateFriend = () => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.name === editingFriend.name ? newFriend : friend
      )
    );
    setIsEditing(false);
    setNewFriend({ name: '', details: '' });
    setEditingFriend(null);
    setNotification({ type: 'success', message: 'Friend updated successfully!' });
  };

  const handleDeleteFriend = (friend) => {
    setFriends((prevFriends) =>
      prevFriends.filter((f) => f.name !== friend.name)
    );
    setNotification({ type: 'success', message: 'Friend deleted successfully!' });
  };

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="friends-content">
      <h1>Friends List</h1>
      <input
        type="text"
        placeholder="Search Friends"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className="random-friend-btn" onClick={handleRandomFriend}>
        Suggest a Friend
      </button>
      <div className="add-friend">
        <input
          type="text"
          placeholder="New Friend's Name"
          value={newFriend.name}
          onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Friend's Details"
          value={newFriend.details}
          onChange={(e) => setNewFriend({ ...newFriend, details: e.target.value })}
        />
        <button onClick={isEditing ? handleUpdateFriend : handleAddFriend}>
          {isEditing ? 'Update Friend' : 'Add Friend'}
        </button>
      </div>
      <ul>
        {filteredFriends.map((friend, index) => (
          <li key={index} className={favorites.includes(friend.name) ? 'favorite' : ''}>
            <span onClick={() => handleFriendClick(friend)}>{friend.name}</span>
            <div className="friend-actions">
              <button onClick={() => toggleFavorite(friend)}>
                {favorites.includes(friend.name) ? 'Unfavorite' : 'Favorite'}
              </button>
              <button onClick={() => handleEditFriend(friend)}>Edit</button>
              <button onClick={() => handleDeleteFriend(friend)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {selectedFriend && (
        <div className="sidebar">
          <div className="sidebar-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedFriend.name}</h2>
            <p>{selectedFriend.details}</p>
          </div>
        </div>
      )}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default FriendsContent;
