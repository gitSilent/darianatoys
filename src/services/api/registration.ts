import axios from 'axios'
import { IUserReg } from '../../types/types'
import { registerUserUrl } from './urls'

export async function registerUser(data:IUserReg){
    return await axios.post(registerUserUrl,{
            ...data
          }
    )
}