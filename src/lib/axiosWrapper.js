import axios from 'axios';

const axiosWrapper = {
  async get(path, token) {
    const response = await axios.get(path, {
      headers: { Authorization: token },
    });

    if (response.status === 403) {
    }
  },
};
