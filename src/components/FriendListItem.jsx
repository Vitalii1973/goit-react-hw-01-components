import React from 'react';

const FriendListItem = ({ friend }) => (
  <li className="item">
    <span className={`status ${friend.isOnline ? 'online' : 'offline'}`}></span>
    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="name">{friend.name}</p>
  </li>
);

export default FriendListItem;
