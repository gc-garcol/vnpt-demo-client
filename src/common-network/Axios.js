import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

// todo add axios-interceptor
// ...

export default instance;

export const fakeAPICalling =  async() => { try { await axios.get('') } catch(e) {}}