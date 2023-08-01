import { IUserReg } from '../../types/types'
import { IJWTKeys } from '../../types/types';
import { instance } from '../interceptor';
import { addMinutes } from '../serviceFuncs/addMinutes';
import { getTokensUrl, refreshTokenUrl } from './urls';
import axios from 'axios'


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

    const refresh = async ()=>{
      return instance.post(refreshTokenUrl,{
          "refresh":refreshToken
      })
      .then((response)=>{
          if (!response.data?.access) {
              return false
          }
  
          let currentDate = new Date()
          let cookieAccess = `access=${response.data.access}; expires=${addMinutes(currentDate,15)}`
          document.cookie = cookieAccess
          
          return true
      })
    }
      return refresh()
}