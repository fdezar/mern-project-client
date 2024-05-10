import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import notesService from "../../services/notes.service";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import appThemeProvider from "../theme/appThemeProvider";
import { ThemeProvider } from "@mui/material";
import styled from 'styled-components';

const ErrorMessageDiv = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 80px;
    text-align: center;
    color: crimson;
`;

function NoteEditPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { noteId } = useParams();
    const navigate = useNavigate();

    const handleTitleInput = e => setTitle(e.target.value);
    const handleContentInput = e => setContent(e.target.value);

    useEffect(() => {
        notesService.getNoteDetails(noteId)
            .then(res => {
                setTitle(res.data.title);
                setContent(res.data.content);
            })
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
    
        const updatedNote = {
          title,
          content
        };

        notesService.updateNote(noteId, updatedNote)
            .then(res => {
                // console.log(res.data);
                navigate(`/dashboard/notes/${noteId}`);
            })
            .catch(err => {
                // console.error(err);
                const errorDescription = err.response.data.message;
                setErrorMessage(errorDescription);
            })
    }

    return (
        <ThemeProvider theme={appThemeProvider}>
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
                  <ErrorMessageDiv>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                  </ErrorMessageDiv>
                </Box>
              </Box>
          </Container>
        </ThemeProvider>
    )
}

export default NoteEditPage;