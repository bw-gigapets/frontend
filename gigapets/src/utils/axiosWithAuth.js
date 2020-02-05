import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL:'https://ken-gigapets.herokuapp.com/api',
        headers: {
            Authorization: token
    }
  });
}