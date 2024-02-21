// src/services/projects.service.js

import axios from 'axios';

class KanbanItemsService {
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

  // POST /api/kanban
  createKanbanItem = requestBody => {
    return this.api.post('/api/kanban', requestBody);
  };

  // GET /api/kanban
  getAllKanbanItems = () => {
    return this.api.get('/api/kanban');
  };

  // GET /api/kanban/:id
  getKanbanItem = id => {
    return this.api.get(`/api/kanban/${id}`);
  };

  // PUT /api/kanban/:id
  updateKanbanItem = (id, requestBody) => {
    return this.api.put(`/api/kanban/${id}`, requestBody);
  };

  // DELETE /api/kanban/:id
  deleteKanbanItem = id => {
    return this.api.delete(`/api/kanban/${id}`);
  };
}

// Create one instance object
const kanbanItemsService = new KanbanItemsService();

export default kanbanItemsService;