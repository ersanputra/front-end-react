// api.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

export const postRegistration = async ({ name, email, password, confirmationPassword }) => {
  try {
    console.log('Regis ??');
    const response = await api.post('/api/v1/registration', {
      name,
      email,
      password,
      confirmationPassword,
    });
    console.log('Registration Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const postLogin = async ({ email, password }) => {
  try {
    console.log('Login ??');
    const response = await api.post('/api/users/login', {  
      email,
      password,
    });
    console.log('Login Response:', response.data);
    const token = response.data.token;
    localStorage.setItem('token', token);

    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

