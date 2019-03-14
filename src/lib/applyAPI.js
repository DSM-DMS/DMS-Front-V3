import axios from 'axios';
const rootUrl = 'https://dms-api.istruly.sexy/apply';

export const getExtensionMap = (time, classNum) => {
  return axios.get(`${rootUrl}/extension/map/${time}/${classNum}`);
};

export const getMyExtensionInfo = (token, time) => {
  return axios.get(`${rootUrl}/extension/${time}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteExtension = (token, time) => {
  return axios.delete(`${rootUrl}/extension/${time}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const applyExtension = (token, param) => {
  return axios.post(
    `${rootUrl}/extension/${param.time}`,
    {
      classNum: param.class + 1,
      seatNum: param.seat,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getGoingoutInform = token => {
  return axios.get(`${rootUrl}/goingout `, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteGoingoutInform = (token, id) => {
  return axios({
    method: 'DELETE',
    url: `${rootUrl}/goingout`,
    data: {
      applyId: id,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// export const postGoingoutInform = (token, goOutDate, returnDate, reason) => {
export const postGoingoutInform = (token, dateForm, reason) => {
  return axios.post(
    `${rootUrl}/goingout `,
    {
      // goOutDate,
      // returnDate,
      date: dateForm,
      reason: reason,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getMusicList = token => {
  return axios.get(`${rootUrl}/music`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const submitMusic = (token, day, singer, musicName) => {
  return axios.post(
    `${rootUrl}/music`,
    {
      day,
      singer,
      musicName,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getStayInform = token => {
  return axios.get(`${rootUrl}/stay`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const submitStayInform = (token, value) => {
  return axios.post(
    `${rootUrl}/stay`,
    {
      value,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
