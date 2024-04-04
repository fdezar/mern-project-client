import { useState } from "react";
import toDoListService from "../services/todolist.service";

function ToDoListForm({ handleAddItem }) {
    const [ content, setContent ] = useState("");

    const handleItemInput = e => setContent(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const newItem = { content };

        toDoListService.createToDoListItem(newItem)
            .then(item => {
                console.log("Submitted: ", item);
                handleAddItem(item);
            })
            .catch(err => {
                console.error(err);
            })
    }

  return (
    <form onSubmit={handleSubmit} method="POST">
      {/* <label htmlFor="name">Name:</label> */}
      <input 
        type="text"
        name="content"
        value={content}
        onChange={handleItemInput}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoListForm;
