import React from 'react';
import '../styles/Profile.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {Object.entries(stats).map(([label, quantity]) => (
          <li key={label}>
            <span className="label">{label}</span>
            <span className="quantity">{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
