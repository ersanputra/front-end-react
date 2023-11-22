import axios from "axios";
import { getCookie } from "@/utils/cookies";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

const userData = JSON.parse(getCookie("userData"));

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

export const getCakes = async () => {
    try {
        const response = await api.get('/api/cakes');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}


export const postCartItem = async ({ userId, cakeId, quantity }) => {
    try {
        const response = await api.post('/api/cartitems', {
          userId,
          cakeId,
          quantity
        });
        return response.data;
    } catch (error) {
        if (error) {
            alert(error.response.data.message);            
        }
    }
  }
  
  export const getCart = async () => {
    try {
        const response = await api.get('/api/cartitems/list/' + userData.user_id);
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const deleteCartItem = async ({ cart_item_id }) => {
    try {
        const response = await api.delete('/api/cartitems/' + cart_item_id);
        return response.data;
    } catch (error) {
        if (error) {
            alert(error.response.data.message);            
        }
    }
  }

  export const updateCartQuantity = async ({ cart_item_id, quantity }) => {
    try {
        const response = await api.put('/api/cartitems/'+ cart_item_id +'/quantity', {
          quantity
        });
        return response.data;
    } catch (error) {
        if (error) {
            alert(error.response.data.message);            
        }
    }
  }