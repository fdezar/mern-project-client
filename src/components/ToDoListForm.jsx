import { useState } from "react";
import { TextField, Button } from "@mui/material";
import formThemeProvider from "../pages/theme/appThemeProvider";
import { ThemeProvider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

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
          sx={{ width: '300px', marginBottom: '30px' }}
          variant="standard"
          label="Add task..."
        />
        <Button type="submit" variant="contained" sx={{ marginLeft: '10px', padding: '4px', marginTop: '15px', minWidth: '35px', maxWidth: '35px' }}><AddIcon /></Button>
      </form>
    </ThemeProvider>
  );
};

export default ToDoListForm;
