import axios from 'axios';
import axiosWrapper from './axiosWrapper';
const rootUrl = 'https://api.dms.istruly.sexy/apply';

export const getExtensionMap = (time, classNum) => {
  return axios.get(`${rootUrl}/extension/map/${time}/${classNum}`);
};

export const getMyExtensionInfo = (token, time, refreshToken) => {
  return axiosWrapper.get(
    `${rootUrl}/extension/${time}`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`
  );
};

export const deleteExtension = (token, time, refreshToken) => {
  return axiosWrapper.delete(
    `${rootUrl}/extension/${time}`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
  );
};

export const applyExtension = (token, param, refreshToken) => {
  return axiosWrapper.post(
    `${rootUrl}/extension/${param.time}`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
    {
      classNum: param.class + 1,
      seatNum: param.seat
    }
  );
};

export const getGoingoutInform = (token, refreshToken) => {
  return axiosWrapper.get(
    `${rootUrl}/goingout `,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`
  );
};

export const deleteGoingoutInform = (token, id, refreshToken) => {
  return axiosWrapper.delete(
    `${rootUrl}/goingout`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
    {
      applyId: id
    }
  );
};

export const postGoingoutInform = (token, dateForm, reason, refreshToken) => {
  return axiosWrapper.post(
    `${rootUrl}/goingout `,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
    {
      date: dateForm,
      reason: reason
    }
  );
};

export const getMusicList = (token, refreshToken) => {
  return axiosWrapper.get(
    `${rootUrl}/music`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`
  );
};

export const submitMusic = (token, day, singer, musicName, refreshToken) => {
  return axiosWrapper.post(
    `${rootUrl}/music`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
    {
      day,
      singer,
      musicName
    }
  );
};

export const patchGoingoutInform = (
  token,
  applyId,
  date,
  reason,
  refreshToken
) => {
  return axiosWrapper.post(
    `${rootUrl}/goingout`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
    {
      applyId,
      date,
      reason
    }
  );
};

export const getStayInform = (token, refreshToken) => {
  return axiosWrapper.get(
    `${rootUrl}/stay`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`
  );
};

export const submitStayInform = (token, value, refreshToken) => {
  return axiosWrapper.post(
    `${rootUrl}/stay`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
    {
      value
    }
  );
};

export const deleteMusic = (token, id, refreshToken) => {
  return axiosWrapper.delete(
    `${rootUrl}/music`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
    {
      applyId: id
    }
  );
};
