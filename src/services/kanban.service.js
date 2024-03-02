import axios from 'axios';

class KanbanItemsService {
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

  // POST /api/kanban/create
  createKanban = requestBody => {
    return this.api.post('/kanban/create', requestBody);
  };

  // GET /api/kanban
  getAllKanbans = () => {
    return this.api.get('/kanban');
  };

  // GET /api/kanban/:id
  getKanban = id => {
    return this.api.get(`/kanban/${id}`);
  };

  // PUT /api/kanban/:id
  updateKanban = (id, requestBody) => {
    return this.api.put(`/kanban/${id}`, requestBody);
  };

  // DELETE /api/kanban/:id
  deleteKanban = id => {
    return this.api.delete(`/kanban/${id}`);
  };
}

// Create one instance object
const kanbanItemsService = new KanbanItemsService();

export default kanbanItemsService;