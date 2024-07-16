// import React, { useState } from 'react';
// import './Chat.css';

// const users = [
//   { id: 1, name: 'Blacko', avatar: 'https://i.pinimg.com/564x/19/f5/f0/19f5f021af350a22d8a86ebecbd9c29a.jpg' },
//   { id: 2, name: 'Gungun', avatar: 'https://i.pinimg.com/564x/0b/08/29/0b0829fd5e176aa657d923a8da70a215.jpg' },
//   { id: 3, name: 'Sattu', avatar: 'https://i.pinimg.com/564x/c1/d2/c3/c1d2c306073d68284748a0237b2f23ed.jpg' },
//   { id: 4, name: 'Shera', avatar: 'https://i.pinimg.com/736x/f4/fc/e7/f4fce7a355fdcde79f5584e0d1db582a.jpg' },
//   { id: 5, name: 'Rahi', avatar: 'https://i.pinimg.com/564x/7a/5b/7c/7a5b7cc3cdc019bbb1eb8e1aff2fef2c.jpg' },
//   { id: 6, name: 'Rockey', avatar: 'https://i.pinimg.com/564x/3b/21/c1/3b21c12b21c7e82cd4946c24ca435be0.jpg' },
  
// ];

// const Chat = () => {
//   const [selectedUser, setSelectedUser] = useState(null);

//   return (
//     <div className="chat-container">
//       <div className="user-list">
//         {users.map((user) => (
//           <div 
//             key={user.id} 
//             className={`user ${selectedUser === user.id ? 'selected' : ''}`}
//             onClick={() => setSelectedUser(user.id)}
//           >
//             <img src={user.avatar} alt={user.name} className="avatar" />
//             <div className="user-name">{user.name}</div>
//           </div>
//         ))}
//       </div>
//       <div className="chat-screen">
//         {selectedUser ? (
//           <div>
//             <h2>Chat with {users.find(user => user.id === selectedUser).name}</h2>
//             <div className="messages">
//               {/* Chat messages go here */}
//             </div>
//           </div>
//         ) : (
//           <div className="no-chat-selected">Select a user to start chatting</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chat;



import React, { useState } from 'react';
import './Chat.css';

const users = [
  { id: 1, name: 'Blacko', avatar: 'https://i.pinimg.com/564x/19/f5/f0/19f5f021af350a22d8a86ebecbd9c29a.jpg' },
  { id: 2, name: 'Gungun', avatar: 'https://i.pinimg.com/564x/0b/08/29/0b0829fd5e176aa657d923a8da70a215.jpg' },
  { id: 3, name: 'Sattu', avatar: 'https://i.pinimg.com/564x/c1/d2/c3/c1d2c306073d68284748a0237b2f23ed.jpg' },
  { id: 4, name: 'Shera', avatar: 'https://i.pinimg.com/736x/f4/fc/e7/f4fce7a355fdcde79f5584e0d1db582a.jpg' },
  { id: 5, name: 'Rahi', avatar: 'https://i.pinimg.com/564x/7a/5b/7c/7a5b7cc3cdc019bbb1eb8e1aff2fef2c.jpg' },
  { id: 6, name: 'Rockey', avatar: 'https://i.pinimg.com/564x/3b/21/c1/3b21c12b21c7e82cd4946c24ca435be0.jpg' },
];

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedUser]: [...(prevMessages[selectedUser] || []), newMessage],
      }));
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="user-list">
        {users.map((user) => (
          <div 
            key={user.id} 
            className={`user ${selectedUser === user.id ? 'selected' : ''}`}
            onClick={() => setSelectedUser(user.id)}
          >
            <img src={user.avatar} alt={user.name} className="avatar" />
            <div className="user-name">{user.name}</div>
          </div>
        ))}
      </div>
      <div className="chat-screen">
        {selectedUser ? (
          <div className="chat-content">
            <h2>Chat with {users.find(user => user.id === selectedUser).name}</h2>
            <div className="messages">
              {messages[selectedUser]?.map((msg, index) => (
                <div key={index} className="message">{msg}</div>
              ))}
            </div>
            <div className="message-input">
              <input 
                type="text" 
                value={newMessage} 
                onChange={(e) => setNewMessage(e.target.value)} 
                placeholder="Type your message..." 
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        ) : (
          <div className="no-chat-selected">Select a user to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default Chat;
