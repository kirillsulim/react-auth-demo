import { useState } from 'react';
import classes from './App.module.scss';
import Login from './Login';
import Registration from './Registration';
import UserInfo from './UserInfo';

function App({client}) {
  const [user, setUser] = useState(null);

  return (
    <div className={classes.App}>
      <UserInfo user={user}/>
      <Registration client={client} user={user} setUser={setUser}/>
      <Login client={client} user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
