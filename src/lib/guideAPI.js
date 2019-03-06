import axios from 'axios';
const rootUrl = 'https://dms-api.istruly.sexy';

export const getNoticeList = () => {
  return axios.get(`${rootUrl}/notice`);
};

export const getRuleList = () => {
  return axios.get(`${rootUrl}/rule`);
};

export const getNoticeDetailPost = id => {
  return axios.get(`${rootUrl}/notice/${id}`);
};

export const getRuleDetailPost = id => {
  return axios.get(`${rootUrl}/rule/${id}`);
};
