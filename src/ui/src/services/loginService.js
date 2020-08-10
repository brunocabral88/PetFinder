import PetFinderAPI from '../apis/pet-finder-api';

const login = async (email, password) => {
  try {
    const response = await PetFinderAPI.post('/api/login', { email, password });
    console.log(response);

    if (response.status == 200 && response.data.token) {
      localStorage.setItem('token', response.data.token);
      return response.data.token;  
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

const logout = () => localStorage.removeItem('token');

const getToken = () => localStorage.getItem('token');

const loginService = {
  login,
  logout,
  getToken,
};

export default loginService;