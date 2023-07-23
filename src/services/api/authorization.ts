import axios from 'axios'
import { IUserReg } from '../../types/types'
import { IJWTKeys } from '../../types/types';
import { getTokensUrl, refreshTokenUrl } from './urls';
import { instance } from '../interceptor';
import { addMinutes } from '../serviceFuncs/addMinutes';

export async function authUser(data:IUserReg){
    return await axios.post<IJWTKeys>(getTokensUrl,{
            ...data
          }
    )
}

export async function authCheck() {
    let accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    let refreshToken = document.cookie.replace(/(?:(?:^|.*;\s*)refresh\s*\=\s*([^;]*).*$)|^.*$/, "$1");


    if (accessToken && refreshToken){
      return true
    }
    
    if(!refreshToken){
      return false
    }

    const refresh = ()=>{
      return instance.post(refreshTokenUrl,{
          "refresh":refreshToken
      })
      .then((response)=>{
          if (!response.data?.access) {
              // navigate('/authorization')
              return false
          }
  
          let currentDate = new Date()
          let cookieAccess = `access=${response.data.access}; expires=${addMinutes(currentDate,15)}`
          document.cookie = cookieAccess
          console.log('truee');
          
          return true
      })
    }
      return refresh()
}