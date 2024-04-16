import axios from 'axios';

class CardService {
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

const cardService = new CardService();

export default cardService;