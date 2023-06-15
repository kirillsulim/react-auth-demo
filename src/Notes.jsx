import { useState } from "react";
import classes from "./Notes.module.scss";

export default ({client, user}) => {
    const [notes, setNotes] = useState([]);

    const loadNotes = async () => {
        const notes = await client.getNotes(user);
        setNotes(notes);
    }

    return (
        <div className={classes.Notes}>
            <button onClick={loadNotes} disabled={user == null}>Load notes</button>
            { notes.map(note => <p>{note}</p>)}
        </div>
    )
}