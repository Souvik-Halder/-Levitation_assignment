import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs',
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
    }
   
});




export const postSignIn=async (email:string,password:string): Promise<any> => api.post('/auth/login',{email,password});

export const postForm=async (data:null): Promise<any> =>{
    

     
   return api.post('/form',data)

};



export default api;
