import axios from 'axios';

class AuthService {
  constructor() {
    // Create a new instance of axios with a custom configuration
    this.api = axios.create({
      baseURL: import.meta.env.VITE_SERVER_URL || 'http://localhost:5005/api'
      // We set our API's base URL so that all requests use the same base URL
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

  login = requestBody => {
    return this.api.post('/auth/login', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  };

  verify = () => {
    return this.api.get('/auth/verify');
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };

  getUserProfile = () => {
    return this.api.get('/auth/:userId');
  }

  editProfile = () => {
    return this.api.put('/auth/:userId');
  }

  editProfileImage = () => {
    return this.api.put('/auth/:userId/update-image', requestBody);
  }

  deleteProfileImage = () => {
    return this.api.delete('/auth/:userId/delete-image', requestBody);
  }
}

// Create one instance object
const authService = new AuthService();

export default authService;
