import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // (NOTE: this will disable client verification)
  cert: {},
  key: {},
  passphrase: 'YYY'
});

export const getUsers = async () => {
  const response = await axios.get('http://localhost:3001/users', {
    httpsAgent
  });
  return response.data;
};
