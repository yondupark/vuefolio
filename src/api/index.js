import axios from 'axios';

const config = {
  baseUrl:'https://swvuefolio-default-rtdb.asia-southeast1.firebasedatabase.app',
}

function fetchNewList() {
  return axios.get(`${config.baseUrl}/ptflists.json`);
}

export {
  fetchNewList
}