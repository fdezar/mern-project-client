import { useState, useEffect } from "react";
import PomodoroClock from "./PomodoroClock";
import ToDoListForm from "./ToDoListForm";
import toDoListService from "../services/todolist.service";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import appThemeProvider from "../pages/theme/appThemeProvider";
import { ThemeProvider, Typography } from "@mui/material"

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
        // console.log(item);
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
      <h1>Your Workspace</h1>
      <PomodoroClock />
      <ThemeProvider theme={appThemeProvider}>
      <Typography variant="h6" style={{ margin: "0 0 10px 20px" }}>Your Tasks</Typography>
      <hr style={{ marginBottom: '30px'}}/>
      <ToDoListForm handleAddItem={handleAddItem} />
      <Table size="small">
               <TableBody>
                 {toDoList.map((toDoListItem) => (
                     <TableRow key={toDoListItem._id}>
                       <TableCell>{toDoListItem.content}</TableCell>       
                       <TableCell align="right"><Button size="small" onClick={() => handleDeleteToDoListItem(toDoListItem._id)}><DeleteIcon /></Button></TableCell>
                     </TableRow>
                 ))}
             </TableBody>
         </Table>
      </ThemeProvider>
    </div>
  );
}

export default DashboardPageContent;
