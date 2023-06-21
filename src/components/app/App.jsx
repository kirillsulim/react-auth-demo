import { useState } from 'react';
import classes from './App.module.scss';
import Login from '../login/Login';
import Notes from '../notes/Notes';
import Registration from '../registration/Registration';
import UserInfo from '../user_info/UserInfo';

function App({client}) {
  const [user, setUser] = useState(null);

  return (
    <div className={classes.App}>
      <UserInfo user={user}/>
      <Registration client={client} user={user} setUser={setUser}/>
      <Login client={client} user={user} setUser={setUser}/>
      <Notes client={client} user={user}/>
    </div>
  );
}

export default App;
