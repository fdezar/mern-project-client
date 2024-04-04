import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PomodoroClock from "./PomodoroClock";
import ToDoList from "./ToDoList";
import ToDoListForm from "./ToDoListForm";
import toDoListService from "../services/todolist.service";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function DashboardPageContent() {
  const [toDoList, setToDoList] = useState([]);

  console.log(toDoList);
  useEffect(() => {
    toDoListService.getAllUserToDoLists()
    .then((res) => {
      // console.log(res.data);
      setToDoList(res.data);
    });
    // .catch(err => console.log(err));
  }, []);
  
  const handleAddItem = (newItem) => {
    toDoListService
      .createToDoListItem(newItem)
      .then((item) => {
        console.log(item);
        const updatedToDoList = [...toDoList, item.data];
        setToDoList(updatedToDoList);
      })
      .catch((err) => {
        // console.error(err);
      });
  };

  const handleDeleteToDoListItem = (id) => {
    toDoListService
      .deleteToDoListItem(id)
      .then((res) => {
        // console.log(res.data)
        setToDoList((prevToDoList) =>
          prevToDoList.filter((toDoListItem) => toDoListItem._id !== id)
        );
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div>
      <p>Are you ready?</p>
      <Link to="notes">Create a note</Link>
      <PomodoroClock />
      <ToDoListForm handleAddItem={handleAddItem} />
      <Table size="small">
               <TableBody>
                 {toDoList.map((toDoListItem) => (
                     <TableRow key={toDoListItem._id}>
                       <TableCell>{toDoListItem.content}</TableCell>       
                       <TableCell align="right"><Button size="small" onClick={() => handleDeleteToDoListItem(toDoListItem._id)}>Delete item</Button></TableCell>
                     </TableRow>
                 ))}
             </TableBody>
         </Table>
    </div>
  );
}

export default DashboardPageContent;
