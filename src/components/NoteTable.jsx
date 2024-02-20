function NoteTable() {

    return (

        <table>
                <thead>
                    <tr>
                        <th>icon Name</th>
                        <th>icon Last Update</th>
                        <th>Shared</th>
                    </tr>
                    <tbody>
                        {notes.map(note => {
                            return <NoteRow key={note._id} note={note.name} />
                        })}
                    </tbody>
                </thead>
            </table>
    );
}

export default NoteTable;