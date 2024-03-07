import { useState } from "react";
import axios from "axios";
import notesService from "../../services/notes.service";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function NoteEditPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const handleTitleInput = e => setTitle(e.target.value);
    const handleContentInput = e => setContent(e.target.value);

    // const [note, setNote] = useState({});

    const { noteId } = useParams();

    const handleSubmit = e => {
        e.preventDefault();
    
        const updatedNote = {
          title,
          content
        };

        useEffect(() => {
            notesService.getNoteDetails(noteId, updatedNote)
                .then(res => {
                    console.log(res.data);
                    // setNote(res.data);
                })
                .catch(err => {
                    console.error(err);
                })
        }, [noteId])

    }

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
              <Typography component="h1" variant="h5">
                Edit Note
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
                    <TextField
                      multiline
                      fullWidth
                      id="content"
                      label="Content"
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
                  Save Changes
                </Button>
              </Box>
            </Box>
        </Container>
    )
}

export default NoteEditPage;