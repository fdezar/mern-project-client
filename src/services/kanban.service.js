import axios from 'axios';

class KanbanService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_SERVER_URL || 'http://localhost:5005/api'
    });

    this.api.interceptors.request.use(config => {
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  createKanban = requestBody => {
    return this.api.post('/kanban/create', requestBody);
  };

  getAllKanbans = () => {
    return this.api.get('/kanban');
  };

  getKanban = id => {
    return this.api.get(`/kanban/${id}`);
  };

  updateKanban = (id, requestBody) => {
    return this.api.put(`/kanban/${id}`, requestBody);
  };

  deleteKanban = id => {
    return this.api.delete(`/kanban/${id}`);
  };
}

const kanbanService = new KanbanService();

export default kanbanService;