import { instance } from "../interceptor"
import { sendReviewUrl } from "./urls"
import { IReviewData } from "../../types/types"
import axios from "axios"


export async function getProducts(url: string) {
   return axios.get(url)
}

export async function retriveProduct(url: string, profuctId: string | null) {
   return axios.get(url + profuctId + "/")
}

export async function sendReview(slug: string | undefined, data: IReviewData) {
   console.log(data);

   return instance.put(`${sendReviewUrl}${slug}/`, {
      ...data
   })
}