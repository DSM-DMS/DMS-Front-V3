import axios from 'axios';
const rootURL = 'https://api.dms.istruly.sexy';

export const postAuth = (id, pw) =>
  axios.post(`${rootURL}/account/auth`, {
    id: id,
    password: pw,
  });

export const patchPassword = (currentPassword, newPassword, token) =>
  axios.patch(
    `${rootURL}/account/pw`,
    {
      currentPassword: currentPassword,
      newPassword: newPassword,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );

export const postForgotPassword = (id, email) =>
  axios.post(`${rootURL}/account/pw`, {
    id: id,
    email: email,
  });

export const postLogin = (id, pw) =>
  axios.post(`${rootURL}/account/auth`, {
    id: id,
    password: pw,
  });

export const postRegister = (uuid, id, pw) =>
  axios.post(`${rootURL}/account/signup`, {
    uuid: uuid,
    id: id,
    password: pw,
  });

export const getPointCardList = token =>
  axios.get(`${rootURL}/info/point`, {
    headers: {
      Authorization: token,
    },
  });

export const getBasicDatas = token =>
  axios.get(`${rootURL}/info/basic`, {
    headers: {
      Authorization: token,
    },
  });
