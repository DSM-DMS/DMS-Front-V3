import axios from 'axios';
const rootURL = 'https://api.dms.istruly.sexy/meal';

export const getMealDate = async formDate => {
  let response = await axios.get(`${rootURL}/${formDate}`);
  return response;
};
