import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import toDoListService from '../services/todolist.service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ToDoList() {
    //  const [toDoList, setToDoList] = useState([]);

    //  const handleDeleteToDoListItem = id => {
    //      toDoListService.deleteToDoListItem(id)
    //        .then(res => {
    //          // console.log(res.data)
    //          setToDoList(prevToDoList => prevToDoList.filter(toDoListItem => toDoListItem._id !== id));
    //        })
    //        .catch(err => {
    //          // console.log(err);
    //        })
    //  };

    //  useEffect(() => {
    //      toDoListService.getAllUserToDoLists()
    //      .then(res => {
    //          // console.log(res.data);
    //          setToDoList(res.data);
    //      })
    //      // .catch(err => console.log(err));
    //  }, []);

     return (
         <>
             <h1>To Do</h1>

             <Table size="small">
               {/* <TableHead>
                 <TableRow>
                   <TableCell>Title</TableCell>
                   <TableCell>Last Update</TableCell>
                   {/* <TableCell>Content</TableCell>
                   <TableCell align="right">Delete</TableCell>
                 </TableRow>
               </TableHead> */}
               <TableBody>
                 {toDoList.map((toDoListItem) => (
                     <TableRow key={toDoListItem._id}>
                       <TableCell>{toDoListItem.content}</TableCell>       
                       <TableCell align="right"><Button size="small" onClick={() => handleDeleteToDoListItem(toDoListItem._id)}><DeleteIcon /></Button></TableCell>
                     </TableRow>
                 ))}
             </TableBody>
         </Table>

         {/* <Link to="/dashboard/notes/create"><Button variant="outlined">Create a note</Button></Link> */}
         {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
           See more notes
         </Link> */}
     </>
     );
}

export default ToDoList;