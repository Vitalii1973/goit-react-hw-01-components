import React from 'react';
import '../styles/FriendList.css';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="friend-list-item">
          <span
            className={`status ${friend.isOnline ? 'online' : 'offline'}`}
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
