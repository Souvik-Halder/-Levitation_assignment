import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
   
});


export const postSignIn=async (email:string,password:string): Promise<any> => api.post('/auth/login',{email,password});



export default api;
