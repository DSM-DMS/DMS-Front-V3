import axios from 'axios';
const rootURL = 'https://api.dsm-dms.com/meal';

export const getMealDate = formDate => 
  axios.get(`${rootURL}/${formDate}`);
  
