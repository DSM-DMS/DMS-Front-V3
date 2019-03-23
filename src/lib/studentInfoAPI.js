import axiosWrapper from './axiosWrapper';
const rootURL = 'https://api.dms.istruly.sexy';

export const postAuth = (id, pw) =>
  axiosWrapper.post(`${rootURL}/account/auth`, null, null, {
    id: id,
    password: pw,
  });

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

export const postForgotPassword = (id, email) =>
  axiosWrapper.post(`${rootURL}/account/pw`, null, null, {
    id: id,
    email: email,
  });

export const postLogin = (id, pw) =>
  axiosWrapper.post(`${rootURL}/account/auth`, null, null, {
    id: id,
    password: pw,
  });

export const postRegister = (uuid, id, pw) =>
  axiosWrapper.post(`${rootURL}/account/signup`, null, null, {
    uuid: uuid,
    id: id,
    password: pw,
  });

export const getPointCardList = (token, refreshToken) =>
  axiosWrapper.get(`${rootURL}/info/point`, token, refreshToken);

export const getBasicDatas = (token, refreshToken) =>
  axiosWrapper.get(`${rootURL}/info/basic`, token, refreshToken);
