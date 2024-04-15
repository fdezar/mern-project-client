import { useState } from "react";
import notesService from "../services/notes.service";
import { TextField } from "@mui/material";

function SearchBar({ setNotes }) {

    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = e => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        notesService.getAllUserNotes()
            .then(userNotes => {
                const userNotesData = userNotes.data;
                let filteredNotes = userNotes.data;
                if (query.trim() !== "") {
                    filteredNotes = userNotesData.filter((note) => {
                        return note.title.toLowerCase().includes(query);
                    });
                }
                setNotes(filteredNotes);
            })
            .catch(error => {
                console.error("Error fetching notes:", error);
            });
    }

    return (
        <div>
            <form>
                <TextField 
                    variant="standard"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}

export default SearchBar;