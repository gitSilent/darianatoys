import axios from "axios"

export async function getProducts(url:string) {
   return axios.get(url)
} 

export async function retriveProduct(url:string, profuctId:string | null) {
    return axios.get(url + profuctId)
 } 