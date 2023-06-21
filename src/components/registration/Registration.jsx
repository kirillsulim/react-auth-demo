import { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import { UserContext } from "../../context/UserContext";

import classes from "./Registration.module.scss";


export default () => {
    const client = useContext(ClientContext);
    const [user, setUser] = useContext(UserContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const register = async () => {
        const result = await client.register({
            username: username,
            password: password
        });
        if (result.error) {
            setError(result.error);
        } else if (!result.username || !result.token) {
            setError("Incorrect server response");
        } else {
            setError(null);
            setUsername("");
            setPassword("");

            setUser({
                username: result.username,
                token: result.token
            });
        }
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
                { error != null && <p className="error">{error}</p> }
            </fieldset>
        </div>
    )
}
