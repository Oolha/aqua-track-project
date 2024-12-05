import filtered_data from './generatedData.json';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const fun = async () => {
  try {
    const res = await axios.post('/auth/login', {
      "email": 'water1@i.ua',
      "password": '12345678',
    });

   

    setAuthHeader(res.data.data.accessToken);
  } catch (e) {
    console.log(e);
  }
};
await fun();

const fun1 = async (amount) => {
  try {
    
    const response = await axios.post(`/water`, { ...amount });
    console.log(response)
    return response.data;
  } catch (e) {
    console.log(e);
  }
};


const formatDate = (isoDate) => {
    const date = new Date(isoDate);
  
    // Отримуємо окремі частини дати
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Місяці від 0 до 11
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // Формуємо дату у потрібному форматі
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

// await fun1({
//         volume:filtered_data[0].amount.toString(),
//         date: formatDate(filtered_data[0].createdAt),
    
//         
//       });



for (let index = 0; index < 519; index++) {
  await fun1({
    "volume":filtered_data[index].amount,
        "date": formatDate(filtered_data[index].createdAt),   
  });
}



