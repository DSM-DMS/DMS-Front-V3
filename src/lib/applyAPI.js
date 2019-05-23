import axios from 'axios';
import axiosWrapper from './axiosWrapper';
const rootUrl = 'https://api.dms.istruly.sexy/apply';

export const getExtensionMap = (time, classNum) => {
  return axios.get(`${rootUrl}/extension/map/${time}/${classNum}`);
};

export const getMyExtensionInfo = (token, time, refreshToken) => {
  return axiosWrapper.get(`${rootUrl}/extension/${time}`, token, refreshToken);
};

export const deleteExtension = (token, time, refreshToken) => {
  return axiosWrapper.delete(
    `${rootUrl}/extension/${time}`,
    token,
    refreshToken
  );
};

export const applyExtension = (token, param, refreshToken) => {
  return axiosWrapper.post(
    `${rootUrl}/extension/${param.time}`,
    token,
    refreshToken,
    {
      classNum: param.class + 1,
      seatNum: param.seat
    }
  );
};

export const getGoingoutInform = (token, refreshToken) => {
  return axiosWrapper.get(`${rootUrl}/goingout `, token, refreshToken);
};

export const deleteGoingoutInform = (token, id, refreshToken) => {
  return axiosWrapper.delete(`${rootUrl}/goingout`, token, refreshToken, {
    applyId: id
  });
};

export const postGoingoutInform = (token, dateForm, reason, refreshToken) => {
  return axiosWrapper.post(`${rootUrl}/goingout `, token, refreshToken, {
    date: dateForm,
    reason: reason
  });
};

export const getMusicList = (token, refreshToken) => {
  return axiosWrapper.get(`${rootUrl}/music`, token, refreshToken);
};

export const submitMusic = (token, day, singer, musicName, refreshToken) => {
  return axiosWrapper.post(`${rootUrl}/music`, token, refreshToken, {
    day,
    singer,
    musicName
  });
};

export const patchGoingoutInform = (
  token,
  applyId,
  date,
  reason,
  refreshToken
) => {
  return axiosWrapper.post(`${rootUrl}/goingout`, token, refreshToken, {
    applyId,
    date,
    reason
  });
};

export const getStayInform = (token, refreshToken) => {
  return axiosWrapper.get(`${rootUrl}/stay`, token, refreshToken);
};

export const submitStayInform = (token, value, refreshToken) => {
  return axiosWrapper.post(`${rootUrl}/stay`, token, refreshToken, {
    value
  });
};

export const deleteMusic = (token, id, refreshToken) => {
  return axiosWrapper.delete(`${rootUrl}/music`, token, refreshToken, {
    applyId: id
  });
};
