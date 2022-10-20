import { Profile } from './profile/Profile';
import user from 'path/user.json';

import { Statistics } from './statistics/Statistics';
import data from 'path/data.json';

import { FriendList } from './friendList/FriendList';
import friends from 'path/friends.json';

import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from 'path/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
