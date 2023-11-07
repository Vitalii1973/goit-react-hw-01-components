import React from 'react';
import '../styles/App.css';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import userData from '../data/user.json';
import statsData from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

function App() {
  return (
    <div className="App">
      <h1>Профіль користувача</h1>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <h1>Статистика</h1>
      <Statistics title="Upload stats" stats={statsData} />

      <h1>Список друзів</h1>
      <FriendList friends={friendsData} />

      <h1>Історія транзакцій</h1>
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;
