import axios from 'axios'
import {baseURL} from 'api/config';

// 创建axios实例



const service = axios.create({
  baseURL, // api的base_url
  timeout: 15000, // 请求超时时间
  withCredentials: true
});

export default service
