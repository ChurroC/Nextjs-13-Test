export default async function getNotes() {
    const notes = [
        {
            id: "1",
            title: "Note 1",
            content: "Content 1",
            createdAt: new Date().toISOString()
        },
        {
            id: "2",
            title: "Note 2",
            content: "Content 2",
            createdAt: new Date().toISOString()
        },
        {
            id: "3",
            title: "Note 3",
            content: "Content 3",
            createdAt: new Date().toISOString()
        }
    ];
    return notes;
}
