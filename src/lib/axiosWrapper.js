import axios from 'axios';
import { setCookie } from './cookie';

const getRefreshTokenURI = '';

function checkValidation(status, refresh, method, path, data) {
  if (status === 403) {
    axios
      .get(getRefreshTokenURI, {
        headers: { Authorization: `bearer ${refresh}` },
      })
      .then(async res => {
        setCookie('JWT', res.data.accessToken);
        const reRequest = await axios({
          method: method,
          url: path,
          headers: {
            Authorization: res.data.accessToken,
          },
          data: data,
        });
        return reRequest;
      })
      .catch(err => {
        return 'expired token';
      });
  } else {
    return false;
  }
}

const axiosWrapper = {
  async get(path, token, refresh) {
    const response = await axios.get(path, {
      headers: { Authorization: token },
    });

    const reRequest = checkValidation(
      response.status,
      refresh,
      'get',
      path,
      null,
    );
    if (reRequest === 'expired token') {
      return 'expired token';
    } else if (reRequest) {
      return reRequest;
    }
    return response;
  },
  async post(path, token, refresh, data) {
    const response = await axios.post(path, data, {
      headers: { Authorization: token },
    });

    const reRequest = checkValidation(
      response.status,
      refresh,
      'post',
      path,
      data,
    );
    if (reRequest === 'expired token') {
      return 'expired token';
    } else if (reRequest) {
      return reRequest;
    }
    return response;
  },
  async patch(path, token, refresh, data) {
    const response = await axios.patch(path, data, {
      headers: { Authorization: token },
    });

    const reRequest = checkValidation(
      response.status,
      refresh,
      'patch',
      path,
      data,
    );
    if (reRequest === 'expired token') {
      return 'expired token';
    } else if (reRequest) {
      return reRequest;
    }
    return response;
  },
  async delete(path, token, refresh, data) {
    const response = await axios.delete(path, data, {
      headers: { Authorization: token },
    });

    const reRequest = checkValidation(
      response.status,
      refresh,
      'delete',
      path,
      data,
    );
    if (reRequest === 'expired token') {
      return 'expired token';
    } else if (reRequest) {
      return reRequest;
    }
    return response;
  },
};

export default axiosWrapper;
