import {get} from '@/util/axios.js';

export const getCities = () => get('/autosuggest', {}); // 获取城市列表

export const getHotels = (param) => get(`/search/${param}`, {}); // 获取酒店列表
