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
      <Registration client={client} />
      <Login client={client} />
    </div>
  );
}

export default App;
