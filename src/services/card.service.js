import axios from 'axios';

class CardService {
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

  createCard = requestBody => {
    return this.api.post('/:kanbanId/createCard', requestBody);
  };

  // getAllKanbanItems = () => {
  //   return this.api.get('/kanban');
  // };

  getCard = id => {
    return this.api.get(`/kanban/${id}`);
  };

  updateCard = (id, requestBody) => {
    return this.api.put(`/kanban/${id}`, requestBody);
  };

  deleteCard = id => {
    return this.api.delete(`/kanban/${id}`);
  };
}

// Create one instance object
const cardService = new CardService();

export default cardService;