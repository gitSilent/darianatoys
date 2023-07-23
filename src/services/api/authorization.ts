import axios from 'axios'
import { IUserReg } from '../../types/types'
import { IJWTKeys } from '../../types/types';
import { getTokensUrl } from './urls';

export async function authUser(data:IUserReg){
    return await axios.post<IJWTKeys>(getTokensUrl,{
            ...data
          }
    )
}