import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import notesService from '../../services/notes.service';
import Button from '@mui/material/Button';

function NoteDetailsPage() {

    const [note, setNote] = useState({});

    const { noteId } = useParams();

    useEffect(() => {
        notesService.getNoteDetails(noteId)
            .then(res => {
                // console.log(res.data);
                setNote(res.data);
            })
            .catch(err => {
                // console.error(err);
            })
    }, [noteId])

    return !note ? (
        <div>
            <p>Loading</p>
        </div>
        ) : (
        <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>

            <Link to={`edit`}><Button>Edit note</Button></Link>
        </div>
    )
}

export default NoteDetailsPage;