import axios from 'axios';

class NotesService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_SERVER_URL || 'http://localhost:5005/api'
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  createNote = requestBody => {
    return this.api.post('/notes/create', requestBody);
  };

  getAllUserNotes = () => {
    return this.api.get('/notes');
  };

  getNoteDetails = id => {
    return this.api.get(`/notes/${id}`);
  };

  updateNote = (id, requestBody) => {
    return this.api.put(`/notes/${id}`, requestBody);
  };

  deleteNote = id => {
    return this.api.delete(`/notes/${id}`);
  };
}

// Create one instance object
const notesService = new NotesService();

export default notesService;
