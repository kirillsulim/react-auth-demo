import classes from "./UserInfo.module.scss";

export default ({user}) => {
    return (
        <div className={classes.UserInfo}>
            <h3>User info</h3>
            {
                user ? <p>You are logged as {user.username}</p> : <p>You are not logged</p>
            }
        </div>
    )
}
