import axios from "axios"
import { instance } from "../interceptor"
import { sendReviewUrl } from "./urls"
import { IReviewData } from "../../types/types"

export async function getProducts(url:string) {
   return axios.get(url)
} 

export async function retriveProduct(url:string, profuctId:string | null) {
    return axios.get(url + profuctId + "/")
 } 

export async function sendReview(slug:string | undefined, data:IReviewData) {
   console.log(`${sendReviewUrl}${slug}`);
   
   return instance.put(`${sendReviewUrl}${slug}/`,{
      ...data
   })
}