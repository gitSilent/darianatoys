import axios from "axios"
import { instance } from "../interceptor"

export async function getPurchases(url:string) {
   
   return instance.get(url)
} 
