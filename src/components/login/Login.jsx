import { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import { UserContext } from "../../context/UserContext";

import classes from "./Login.module.scss";


export default () => {
    const client = useContext(ClientContext);
    const [user, setUser] = useContext(UserContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const login = async () => {
        const result = await client.login({
            username: username,
            password: password
        });
        if (result.error) {
            setError(result.error);
        } else if (!result.username || !result.token) {
            setError("Incorrect server response");
        } else {
            setError(null);
            setUser({
                username: result.username,
                token: result.token
            });
        }
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <div className={classes.Login}>
            <h3>Login form</h3>
            <fieldset disabled={user !== null}>
                { user != null && <p>Log out before log in as another user</p>}
                <label>Login</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Password</label>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onMouseDown={() => setShowPassword(true)} onMouseUp={() => setShowPassword(false)}>Show</button>
                <br />
            </fieldset>
            <button onClick={login} disabled={user !== null}>Log in</button>
            <button onClick={logout} disabled={user === null}>Log out</button>
            { error != null && <p className="error">{error}</p> }
        </div>
    )
}
