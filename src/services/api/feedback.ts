import axios from 'axios'
import { IFeedbackData, IUserReg } from '../../types/types'
import { sendFeedbackUrl } from './urls'
import { instance } from '../interceptor'

export async function sendFeedback(data:IFeedbackData){
    return await instance.put(sendFeedbackUrl,{
            ...data
          }
    )
}