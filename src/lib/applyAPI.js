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
  return axios.get(`${rootUrl}/goingout `, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const postGoingoutInform = async (
  token,
  goOutDate,
  returnDate,
  reason
) => {
  return axios.post(
    `${rootUrl}/goingout `,
    {
      goOutDate,
      returnDate,
      reason
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const getMusicList = token => {
  return axios.get(`${rootUrl}/music`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const submitMusic = (token, day, singer, musicName) => {
  return axios.post(
    `${rootUrl}/music`,
    {
      day,
      singer,
      musicName
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const getStayInform = token => {
  return axios.get(`${rootUrl}/stay`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const submitStayInform = (token, value) => {
  return axios.post(
    `${rootUrl}/stay`,
    {
      value
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
