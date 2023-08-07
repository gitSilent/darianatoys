import axios from "axios"
import { instance } from "../interceptor"
import { putPurchaseUrl } from "./urls"

export async function getPurchases(url:string) {
   
   return instance.get(url)
} 

export async function putPurchase() {
   return instance.put(putPurchaseUrl)
}
