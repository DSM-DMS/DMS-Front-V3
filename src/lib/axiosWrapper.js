import axios from 'axios';
import { setCookie, removeCookie } from './cookie';

const getRefreshTokenURI = 'https://api.dms.istruly.sexy/account/refresh';

async function checkValidation(status, refresh, method, path, data, domain) {
  let returnVal = false;
  if (status === 403) {
    try {
      const newTokenRequest = await axios.post(domain, null, {
        headers: { Authorization: refresh },
      });
      setCookie('JWT', newTokenRequest.data.accessToken);
      // setCookie('RFT', newTokenRequest.data.refreshToken);
      returnVal = axios({
        method: method,
        url: path,
        headers: {
          Authorization: `Bearer ${newTokenRequest.data.accessToken}`,
        },
        data: data,
      });
    } catch (e) {
      returnVal = new Promise((resolve, reject) => {
        reject('expired Token');
      });
    }
  }
  return returnVal;
}

const axiosWrapper = {
  async get(path, token, refresh, domain = getRefreshTokenURI) {
    let response;
    try {
      response = await axios.get(path, {
        headers: { Authorization: token },
      });
    } catch (e) {
      const reRequest = checkValidation(
        e.response.status,
        refresh,
        'get',
        path,
        null,
        domain,
      );
      if (reRequest) {
        response = reRequest;
      }
    }
    return response;
  },
  async post(path, token, refresh, data, domain = getRefreshTokenURI) {
    let response;
    try {
      response = await axios.post(path, data, {
        headers: { Authorization: token },
      });
    } catch (e) {
      const reRequest = checkValidation(
        e.response.status,
        refresh,
        'post',
        path,
        data,
        domain,
      );
      if (reRequest) {
        response = reRequest;
      }
    }
    return response;
  },
  async patch(path, token, refresh, data, domain = getRefreshTokenURI) {
    let response;
    try {
      response = await axios.patch(path, data, {
        headers: { Authorization: token },
      });
    } catch (e) {
      const reRequest = checkValidation(
        e.response.status,
        refresh,
        'patch',
        path,
        data,
        domain,
      );
      if (reRequest) {
        response = reRequest;
      }
    }
    return response;
  },
  async delete(path, token, refresh, data, domain = getRefreshTokenURI) {
    let response;
    try {
      response = await axios.delete(path, data, {
        headers: { Authorization: token },
      });
    } catch (e) {
      const reRequest = checkValidation(
        e.response.status,
        refresh,
        'delete',
        path,
        data,
        domain,
      );
      if (reRequest) {
        response = reRequest;
      }
    }
    return response;
  },
};

export default axiosWrapper;
