/*
 * @Author: heinan 
 * @Date: 2020-10-13 09:02:48 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-10-13 09:40:59
 */

import axios from 'axios';

const request = axios.create();

request.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error)
})

request.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error)
})

export default request;