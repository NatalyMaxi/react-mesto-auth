export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (res) => {
   return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

const headers = {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
}

export const authorize = ({ email, password }) => {
   return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
   }).then((res) => checkResponse(res));
}

export const register = ({ email, password }) => {
   return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
   }).then((res) => checkResponse(res));
}