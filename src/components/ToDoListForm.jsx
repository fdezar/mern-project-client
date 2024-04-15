import { useState } from "react";
import { TextField } from "@mui/material";
import formThemeProvider from "../pages/theme/appThemeProvider";
import { ThemeProvider } from "@mui/material";

function ToDoListForm({ handleAddItem }) {
    const [ content, setContent ] = useState("");

    const handleItemInput = e => setContent(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const newItem = { content };

        handleAddItem(newItem);
        setContent("");
    }

  return (
    <ThemeProvider theme={formThemeProvider}>
      <form onSubmit={handleSubmit} method="POST">
        <TextField
          name="content"
          value={content}
          onChange={handleItemInput}
        />
        <button type="submit">Add Task</button>
      </form>
    </ThemeProvider>
  );
};

export default ToDoListForm;
