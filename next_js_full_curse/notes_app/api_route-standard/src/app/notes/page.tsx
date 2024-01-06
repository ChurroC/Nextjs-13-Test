import getNotes from "./notes";
import Note from "./note";
import { grid } from "./note.module.css";

export default async function NotesPages() {
    const notes = await getNotes();

    return (
        <div>
            <h1>Notes</h1>
            <div className={grid}>
                {notes?.map(note => <Note key={note.id} note={note} />)}
            </div>
        </div>
    );
}
