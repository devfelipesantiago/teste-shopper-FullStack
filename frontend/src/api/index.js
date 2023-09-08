import axios from 'axios';

const URL = 'http://localhost:3001/api';
const api = axios.create({ 
  baseURL:`${URL}`, 
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export function getAllproducts(){
  try {
    api.get(`/products`)
    .then(response => {
        console.log(response.data);
        return response.data;
      })
  } catch (error) {
    console.log(error.message);
  }
}