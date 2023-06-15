import { useState } from "react";

import classes from "./Login.module.scss";


export default ({client, user}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const register = () => {
        client.register({
            username: username,
            password: password
        });
    }

    return (
        <div className={classes.Registration}>
            <h3>Registration form</h3>
            <fieldset disabled={user != null}>
                { user != null && <p>Log out before register new user</p>}
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Password</label>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onMouseDown={() => setShowPassword(true)} onMouseUp={() => setShowPassword(false)}>Show</button>
                <br />
                <button onClick={register}>Register</button>
            </fieldset>
        </div>
    )
}
