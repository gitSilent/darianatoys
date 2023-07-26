import axios from 'axios'
import { instance } from '../interceptor'
import { IProductToCart } from '../../types/types'
import { addToCartUrl, getCartUrl } from './urls'


export async function addToCart(data: IProductToCart) {
    return await instance.put(addToCartUrl, { ...data })
}

export async function getCart() {
    return await instance.get(getCartUrl)
}


export async function removeToCart(data: IProductToCart) {
    return await instance.delete(addToCartUrl, { data })
}