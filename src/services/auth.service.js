import axios from 'axios';

class AuthService {
  constructor() {
    // Create a new instance of axios with a custom configuration
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

  login = requestBody => {
    return this.api.post('/auth/login', requestBody);
  };

  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);
  };

  verify = () => {
    return this.api.get('/auth/verify');
  };

  uploadImage = file => {
    return this.api.post('/auth/upload-image', file);
  }

  getUserProfile = () => {
    return this.api.get('/auth/my-profile');
  }

  editProfile = (requestBody) => {
    return this.api.put('/auth/my-profile', requestBody);
  }

  editProfilePassword = (requestBody) => {
    return this.api.post('/auth/passwordupdate', requestBody);
  }

  deleteProfile = () => {
    return this.api.delete('/auth/my-profile');
  }

  editProfileImage = file => {
    return this.api.put('/auth/my-profile/update-image', file);
  }

  deleteProfileImage = () => {
    return this.api.put('/auth/my-profile/delete-image');
  }
}

// Create one instance object
const authService = new AuthService();

export default authService;
