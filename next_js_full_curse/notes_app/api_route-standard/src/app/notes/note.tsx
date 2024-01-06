import Link from "next/link";
import { note as noteStyle } from "./note.module.css";

export default async function Note({ note }: any) {
    const { id, title, content, createdAt } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className={noteStyle}>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{createdAt}</p>
            </div>
        </Link>
    );
}
