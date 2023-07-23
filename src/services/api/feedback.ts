import { IFeedbackData, IUserReg } from '../../types/types'
import { sendFeedbackUrl } from './urls'
import { instance } from '../interceptor'

export async function sendFeedback(data:IFeedbackData){  
  console.log(data);
  
    return await instance.put(sendFeedbackUrl,{
            ...data
          }
    )
}