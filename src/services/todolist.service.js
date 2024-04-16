import axios from 'axios';

class ToDoListService {
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

  createToDoListItem = requestBody => {
    return this.api.post('/todolist/create', requestBody);
  };

  getAllUserToDoLists = () => {
    return this.api.get('/todolist');
  };

  getToDoListItemDetails = id => {
    return this.api.get(`/todolist/${id}`);
  };

  updateToDoListItem = (id, requestBody) => {
    return this.api.put(`/todolist/${id}`, requestBody);
  };

  deleteToDoListItem = id => {
    return this.api.delete(`/todolist/${id}`);
  };
}

const toDoListService = new ToDoListService();

export default toDoListService;