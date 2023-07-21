import axios from 'axios'
import { IMainPagePicture, IUserReg } from '../../types/types'
import { IJWTKeys } from '../../types/types';
import { mainPageUrl } from './urls';

export async function getMainPagePictures(url:string){
    return await axios.get(mainPageUrl)
    
}