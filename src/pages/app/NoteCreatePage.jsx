import { useState } from "react";
import axios from "axios";
import notesService from "../../services/notes.service";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";

function NoteCreatePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleTitleInput = e => setTitle(e.target.value);
    const handleContentInput = e => setContent(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
    
        const newNote = {
          title,
          content
        };
    
        notesService.createNote(newNote)
          .then(res => {
            console.log(res.data);
            navigate('/dashboard/notes'); // toDo - modificar
            // Handle success, maybe redirect to note details page
          })
          .catch(err => {
            console.error(err);
            // Handle error, maybe show an error message to the user
          });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <EditNoteIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Create Note
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="title"
                      label="Title"
                      autoFocus
                      value={title}
                      onChange={handleTitleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* <TextField
                      multiline
                      fullWidth
                      id="content"
                      label="Content"
                      value={content}
                      onChange={handleContentInput}
                    /> */}
                    <TextareaAutosize
                      minRows={5}
                      maxRows={17}
                      fullWidth
                      id="content"
                      placeholder="Content"
                      value={content}
                      onChange={handleContentInput}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Note
                </Button>
              </Box>
            </Box>
        </Container>
    )
}

export default NoteCreatePage;