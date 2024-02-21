import axios from 'axios';

class NotesService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || 'http://localhost:5005'
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

  // POST /api/notes
  createNote = requestBody => {
    return this.api.post('/api/notes', requestBody);
  };

  // GET /api/notes
  getAllNotes = () => {
    return this.api.get('/api/notes');
  };

  // GET /api/notes/:id
  getNote = id => {
    return this.api.get(`/api/notes/${id}`);
  };

  // PUT /api/projects/:id
  updateNote = (id, requestBody) => {
    return this.api.put(`/api/notes/${id}`, requestBody);
  };

  // DELETE /api/projects/:id
  deleteNote = id => {
    return this.api.delete(`/api/notes/${id}`);
  };
}

// Create one instance object
const notesService = new NotesService();

export default notesService;
