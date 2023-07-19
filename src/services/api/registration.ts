import axios from 'axios'
import { IUserReg } from '../../types/types'

export async function registerUser(data:IUserReg){
    return await axios.post('http://5.63.154.245:8000/auth/users/',{
            ...data
          }
    )
}