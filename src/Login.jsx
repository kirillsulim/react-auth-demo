import { useState } from "react";

import classes from "./Login.module.scss";


export default ({client, user}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={classes.Login}>
            <h3>Login form</h3>
            <fieldset disabled={user != null}>
                { user != null && <p>Log out before log in as another user</p>}
                <label>Login</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Password</label>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onMouseDown={() => setShowPassword(true)} onMouseUp={() => setShowPassword(false)}>Show</button>
                <br />
            </fieldset>
            <button disabled={user != null}>Log in</button>
            <button disabled={user == null}>Log out</button>
        </div>
    )
}
