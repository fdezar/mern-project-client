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

  createKanbanItem = requestBody => {
    return this.api.post('/kanban', requestBody);
  };

  getAllKanbanItems = () => {
    return this.api.get('/kanban');
  };

  getKanbanItem = id => {
    return this.api.get(`/kanban/${id}`);
  };

  updateKanbanItem = (id, requestBody) => {
    return this.api.put(`/kanban/${id}`, requestBody);
  };

  deleteKanbanItem = id => {
    return this.api.delete(`/kanban/${id}`);
  };
}

// Create one instance object
const kanbanItemsService = new KanbanItemsService();

export default kanbanItemsService;