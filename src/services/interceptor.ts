import axios from "axios";
import { getTokensUrl, refreshTokenUrl } from "./api/urls";
import { addMinutes } from "./serviceFuncs/addMinutes";

export const instance = axios.create({
  // к запросу будет прикрепляться cookies
//   withCredentials: true,
//   baseURL: "https://jsonplaceholder.typicode.com/",
});


// создаем перехватчик запросов
// который к каждому запросу добавляет accessToken из куки
instance.interceptors.request.use(
  (config) => {

    let accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  }
)


// создаем перехватчик ответов
// который в случае невалидного accessToken попытается его обновить
// и переотправить запрос с обновленным accessToken
instance.interceptors.response.use(
  // в случае валидного accessToken ничего не делаем:
  (config) => {
    return config;
  },
  // в случае просроченного accessToken пытаемся его обновить:
  async (error) => {
    // если при получении ошибки в куках нет refresh ключа (истек), то сразу делаем соответствующий return о том, что токен истек и
    //пользователю нужно переавторизоваться 
      let refreshToken = document.cookie.replace(/(?:(?:^|.*;\s*)refresh\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      if (refreshToken === ""){
          return 'refresh token expired, please relogin'
        }
        
        const originalRequest = {...error.config};
        console.log(originalRequest.headers.Authorization);
        
    // предотвращаем зацикленный запрос, добавляя свойство _isRetry 
   originalRequest._isRetry = true; 
    if (
      // проверим, что ошибка именно из-за невалидного accessToken
      error.response.status === 401 && 
      // проверим, что запрос не повторный
      error.config &&
      !error.config._isRetry
    ) {
      try {
        // запрос на обновление токенов

        const resp = await instance.post(refreshTokenUrl,{
            "refresh":refreshToken
        });
        // сохраняем новый accessToken в куки
        let currentDate = new Date();
        console.log(resp);
        
        let newAccessToken = `access=${resp.data.access}; expires=${addMinutes(currentDate,15)}`
        // кладем новый полученный access токен в куки и устанавливаем его в headers для повторного запроса авторизации
        document.cookie = newAccessToken;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        console.log(originalRequest);
        
        // localStorage.setItem("token", resp.data.accessToken);
        // переотправляем запрос с обновленным accessToken
        return instance.request(originalRequest);
      } catch (error) {
        console.log("AUTH ERROR");
      }
    }
    // на случай, если возникла другая ошибка (не связанная с авторизацией)
    // пробросим эту ошибку 
    throw error;
  }
);