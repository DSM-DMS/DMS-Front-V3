import axios from 'axios';
const rootURL = 'https://api.dms.istruly.sexy/report';

export const postFacilityReport = (room, content, token) =>
  axios.post(
    `${rootURL}/facility`,
    {
      room: room,
      content: content,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );

export const postBugReport = (content, token) =>
  axios.post(
    `${rootURL}/bug/1`,
    {
      content: content,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
