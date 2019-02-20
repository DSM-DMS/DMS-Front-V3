import axios from 'axios';
const rootUrl = 'http://ec2.istruly.sexy:5000';

export const getNoticeList = () => {
  return axios.get(`${rootUrl}/notice`);
};

export const getRuleList = () => {
  return axios.get(`${rootUrl}/rule`);
};

export const getFaqList = () => {
  return axios.get(`${rootUrl}/qna`);
};

export const getNoticeDetailPost = id => {
  return axios.get(`${rootUrl}/notice/${id}`);
};

export const getRuleDetailPost = id => {
  return axios.get(`${rootUrl}/rule/${id}`);
};

export const getFaqDetailPost = id => {
  return axios.get(`${rootUrl}/qna/${id}`);
};
