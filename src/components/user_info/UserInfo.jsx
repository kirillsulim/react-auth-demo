import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import classes from "./UserInfo.module.scss";

export default () => {
    const [user, _] = useContext(UserContext);

    return (
        <div className={classes.UserInfo}>
            <h3>User info</h3>
            {
                user ? <p>You are logged as {user.username}</p> : <p>You are not logged</p>
            }
        </div>
    )
}
