import { IFeedbackData } from '../../types/types'
import { getFeedbackUrl, sendFeedbackUrl } from './urls'
import { instance } from '../interceptor'

export async function sendFeedback(data:IFeedbackData){  
  
    return await instance.put(sendFeedbackUrl,{
            ...data
          }
    )
}

export async function getFeedback() {
  return await instance.get(getFeedbackUrl)
}