import axios from 'axios';

class AuthService {
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

const authService = new AuthService();

export default authService;
