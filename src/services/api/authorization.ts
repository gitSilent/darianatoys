import axios from 'axios'
import { IUserReg } from '../../types/types'
import { IJWTKeys } from '../../types/types';

export async function authUser(data:IUserReg){
    return await axios.post<IJWTKeys>('http://5.63.154.245:8000/auth/jwt/create/',{
            ...data
          }
    )
}