import axios from 'axios';
const rootURL = 'https://api.dms.istruly.sexy/meal';

export const getMealDate = formDate => axios.get(`${rootURL}/${formDate}`);
