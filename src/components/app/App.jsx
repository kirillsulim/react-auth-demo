import classes from './App.module.scss';
import Login from '../login/Login';
import Notes from '../notes/Notes';
import Registration from '../registration/Registration';
import UserInfo from '../user_info/UserInfo';
import { useUserState } from '../../store/user_store';

function App() {
  const [user, setUser] = useUserState();

  return (
    <div className={classes.App}>
      <UserInfo user={user}/>
      <Registration user={user} setUser={setUser}/>
      <Login user={user} setUser={setUser}/>
      <Notes user={user}/>
    </div>
  );
}

export default App;
