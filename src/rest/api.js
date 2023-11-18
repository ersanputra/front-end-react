import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})


export const postLogin = async ({
     email, password
}) => {
    try {
        const response = await api.post('/api/users/login', {
            email,
            password,
        });
        return response.data;
        
    } catch (error) {
        if (error) {
            alert(error.response.data.message);            
        }
    }
}

export const postRegistrtion = async ({
  full_name, phone_number, email, password, imageUrl
}) => {
  try {
      const response = await api.post('/api/users/register', {
        full_name,
        phone_number,
        email,
        password,
        profile_image: imageUrl
      });
      return response.data;
  } catch (error) {
      if (error) {
          alert(error.response.data.message);            
      }
  }
}

