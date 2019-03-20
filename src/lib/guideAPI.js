import axios from 'axios';
const rootUrl = 'https://api.dms.istruly.sexy/guide';

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
