import { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import { UserContext } from "../../context/UserContext";
import classes from "./Notes.module.scss";

export default () => {
    const client = useContext(ClientContext);
    const [user, _] = useContext(UserContext);

    const [notes, setNotes] = useState([]);

    const loadNotes = async () => {
        const notes = await client.getNotes(user);
        setNotes(notes);
    }

    return (
        <div className={classes.Notes}>
            <button onClick={loadNotes} disabled={user === null}>Load notes</button>
            { notes.map(note => <p>{note}</p>)}
        </div>
    )
}
