import axios from '../utils/axiosInstance.js'
export const register = async(credentials) =>{
    const result = await axios.post("/auth/register", { ...credentials });
    return result;
}

export const signIn = async (credentials) => {
    const result = await axios.post("/auth/login", { ...credentials });
    return result;
  };