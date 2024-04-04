import { Link } from 'react-router-dom';
import { useState } from 'react';
import PomodoroClock from './PomodoroClock';
import ToDoList from './ToDoList';
import ToDoListForm from './ToDoListForm';
import toDoListService from '../services/todolist.service';

function DashboardPageContent() {

    const [toDoList, setToDoList] = useState([]);

  const handleAddItem = newItem => {

    toDoListService.createToDoListItem(newItem)
        .then(item => {
            const updatedToDoList = [...toDoList, item];
            setToDoList(updatedToDoList);
        })
        .catch(err => {
            console.error(err);
        })    
  }

//   const handleDeleteItem = id => {
//     const updatedToDoList = toDoList.filter(item => item.id !== id);
//     setToDoList(updatedToDoList);
//   };

    return (
        <div>
            <p>Are you ready?</p>
            <Link to="notes">Create a note</Link>
            <PomodoroClock />
            <ToDoListForm handleAddItem={handleAddItem} />
            <ToDoList />
        </div>
    )
}

export default DashboardPageContent;