import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import notesService from '../../services/notes.service';
import { useState, useEffect } from 'react';

function NotesPage({ handleItemClick }) {

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
        <>
            <h1>Notes</h1>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Last Update</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notes.map((note) => (
                    <TableRow key={note._id}>
                      <TableCell>{note.title}</TableCell>
                      <TableCell>{note.updatedAt}</TableCell>
                      <TableCell>Delete</TableCell>
                      <TableCell align="right">Delete</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

        <Button variant="outlined" onClick={() => handleItemClick('noteCreate')}>Create a note</Button>
        {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link> */}
    </>

     // <table>
        //         <thead>
        //             <tr>
        //                 <th>icon Name</th>
        //                 <th>icon Last Update</th>
        //                 <th>Shared</th>
        //             </tr>
        //             <tbody>
        //                 {notes.map(note => {
        //                     return <NoteRow key={note._id} note={note.name} />
        //                 })}
        //             </tbody>
        //         </thead>
        //     </table>
        
    );
}

export default NotesPage;