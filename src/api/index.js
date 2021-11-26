import {mapIP, detechUrlByPlatform} from '../utils/common';
import axios from 'axios';

export const getListGame = () => {
  const baseUrl = detechUrlByPlatform();
  return axios({method: 'GET', url: `http://${baseUrl}/games`});
};

export const getGameId = id => {
  const baseUrl = detechUrlByPlatform();
  return axios({method: 'GET', url: `http://${baseUrl}/games/${id}`});
};
