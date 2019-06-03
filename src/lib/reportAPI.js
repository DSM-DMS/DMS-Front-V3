import axiosWrapper from './axiosWrapper';
const rootURL = 'https://api.dms.istruly.sexy/report';

export const postFacilityReport = (room, content, token, refreshToken) =>
  axiosWrapper.post(
    `${rootURL}/facility`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
    {
      room: room,
      content: content,
    },
  );

export const postBugReport = (content, token, refreshToken) =>
  axiosWrapper.post(
    `${rootURL}/bug/1`,
    `Bearer ${token}`,
    `Bearer ${refreshToken}`,
    {
      content: content,
    },
  );
