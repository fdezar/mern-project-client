import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import notesService from "../../services/notes.service";

function NotesPage() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        notesService.getAllUserNotes()
        .then(res => {
            console.log(res.data);
            setNotes(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {notes.map(note => {
                <p></p>
            })}
        </div>
    )
}

export default NotesPage;