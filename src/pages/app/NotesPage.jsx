import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function NotesPage() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get(/*"https://ih-beers-api2.herokuapp.com/beers"*/)
        .then(res => {
            console.log(res.data);
            setNotes(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default NotesPage;