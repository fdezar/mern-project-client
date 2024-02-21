import { useState } from "react";
import jsonData from "./../data.json"

function SearchBar({ setNotes }) {

    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = e => {
        setSearchQuery(e.target.value);

        const filteredNotes = jsonData.filter((note) => {
            return note.name.toLowerCase().includes(e.target.value.toLowerCase());
        });

        setNotes(filteredNotes);
    }

    return (
        <div>
            <form>
                <label htmlFor="search">Search</label>
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </form>
            {/* poner un icono o algo */}
            <p>Search</p>
        </div>
    );
}

export default SearchBar;