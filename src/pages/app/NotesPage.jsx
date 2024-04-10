// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBar from '../../components/SearchBar';
import notesService from '../../services/notes.service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

function NotesPage() {

    const [notes, setNotes] = useState([]);

    const handleDeleteNote = id => {
        notesService.deleteNote(id)
          .then(res => {
            // console.log(res.data)
            setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
          })
          .catch(err => {
            // console.log(err);
          })
    };

    useEffect(() => {
        notesService.getAllUserNotes()
        .then(res => {
            // console.log(res.data);
            setNotes(res.data);
        })
        // .catch(err => console.log(err));
    }, []);


    return (
        <>
            <h1>Notes</h1>
            <SearchBar setNotes={setNotes} />
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Last Update</TableCell>
                  {/* <TableCell>Content</TableCell> */}
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notes.map((note) => (
                    <TableRow key={note._id}>
                      <TableCell><Link to={`${note._id}`} style={{textDecoration: 'none', color: 'inherit'}}>{note.title}</Link></TableCell>
                      <TableCell>{format(new Date(note.updatedAt), 'dd/MM/yyyy HH:mm')}</TableCell>       
                      <TableCell align="right"><Button size="small" onClick={() => handleDeleteNote(note._id)}><DeleteIcon /></Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

        <Link to="/dashboard/notes/create"><Button variant="outlined">Create a note</Button></Link>
        {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more notes
        </Link> */}
    </>
    );
}

export default NotesPage;