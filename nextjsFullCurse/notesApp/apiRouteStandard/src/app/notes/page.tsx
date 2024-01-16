import getNotes from "./getNotes";
import Note from "./note";
import styles from "./note.module.css";

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div>
            <h1>Notes</h1>
            <div className={styles.grid}>
                {notes?.map(note => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>

            {/*<CreateNote />*/}
        </div>
    );
}
