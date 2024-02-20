import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function NoteDetailsPage() {

    const [note, setNote] = useState({});

    const { noteId } = useParams();

    useEffect(() => {
        axios.get(/*`https://ih-beers-api2.herokuapp.com/beers/${beerId}`*/)
            .then(res => {
                console.log(res.data);
                setNote(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [noteId])

    return !note ? (
        <div>
            <p>Loading</p>
        </div>
        ) : (
        <div>
            <p>Note</p>
        </div>
    )
}

export default NoteDetailsPage;