import classes from './App.module.scss';
import Login from '../login/Login';
import Notes from '../notes/Notes';
import Registration from '../registration/Registration';
import UserInfo from '../user_info/UserInfo';
import { UserContext } from '../../context/UserContext';
import { useUserState } from '../../store/user_store';

function App() {
  const [user, setUser] = useUserState();

  return (
    <div className={classes.App}>
      <UserContext.Provider value={[user, setUser]}>
        <UserInfo />
        <Registration />
        <Login />
        <Notes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
