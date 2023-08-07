import { instance } from "../interceptor";
import { getProfileInfoUrl, putProfileInfoUrl } from "./urls";

export async function getProfileInfo(id:number | undefined) {
    return instance.get(getProfileInfoUrl + `${id}`)
}

export async function setNewUserInfo(id:number | undefined, country:string | undefined, town:string | undefined) {
    return instance.put(putProfileInfoUrl + `${id}`, {
        country,
        town
    })
}