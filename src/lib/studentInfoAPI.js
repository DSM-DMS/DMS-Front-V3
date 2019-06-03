import axiosWrapper from './axiosWrapper';
import axios from 'axios';
const rootURL = 'https://api.dms.istruly.sexy';

export const patchPassword = (
  currentPassword,
  newPassword,
  token,
  refreshToken,
) =>
  axiosWrapper.patch(`${rootURL}/account/pw`, token, refreshToken, {
    currentPassword: currentPassword,
    newPassword: newPassword,
  });

// forgot password의 경우 토큰을 사용하지 않으므로 wrapper를 사용하지 않음.
export const postForgotPassword = (id, email) =>
  axios.post(`${rootURL}/account/pw`, {
    id: id,
    email: email,
  });

// 위와 같음
export const postLogin = (id, pw) =>
  axios.post(`${rootURL}/account/auth`, {
    id: id,
    password: pw,
  });

// 위와 같음
export const postRegister = (uuid, id, pw) =>
  axios.post(`${rootURL}/account/signup`, {
    uuid: uuid,
    id: id,
    password: pw,
  });

export const getPointCardList = (token, refreshToken) =>
  axiosWrapper.get(
    `${rootURL}/info/point`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
  );

export const getBasicDatas = (token, refreshToken) =>
  axiosWrapper.get(
    `${rootURL}/info/basic`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
  );
