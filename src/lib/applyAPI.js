import axios from 'axios';
const rootUrl = 'http://ec2.istruly.sexy:5000/apply';

export const getExtensionMap = async (time, classNum) => {
  return await axios.get(`${rootUrl}/extension/${time}/map`, {
    data: {
      classNum
    }
  });
};

export const getGoingoutInform = async token => {
  return await axios.get(`${rootUrl}/goingout `, {
    params: {
      Authorization: token
    }
  });
};
