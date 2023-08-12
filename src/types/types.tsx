interface IProductPhotos {
    photo: string
}
export interface IProduct {
    slug: string,
    photos: IProductPhotos[],
    description: string,
    cost: string
}

export interface IUserReg {
    username: string,
    email: string,
    password: string
}

export interface IUserAuth {
    username: string,
    password: string
}

export interface IJWTKeys {
    refresh: string,
    access: string
}

export interface IMainPagePicture {
    image_url: string
}

export interface IProductToCart {
    toy: number | undefined,
    user?: number | undefined,
    amount: number
}

export interface IReview {
    id:number,
    title: string,
    description: string,
    rating:number,
    toy: number,
    user: number,

}

export interface IProductPageInfo {
    category: {
        id: number,
        name: string,
        slug: string
    },
    id: number,
    cost: number,
    description: string,
    overall_rating: number,
    photos: IMainPagePicture[],
    reviews: IReview[],
    slug: string,
    title: string
}

export interface IToyInCart {
    amount: number,
    toy: IToyInCartToy,
    total: number,
    photos: IPhotosArr[]
}

export interface IToyInCartToy {
    category: number,
    cost: number,
    description: string,
    id: number,
    is_published: boolean,
    slug: string,
    title: string,
}

export interface IToysInCart {
    items: IToyInCart[],
    total_price: number,
    user: number
}

export interface IFeedbackData {
    user: number,
    email: string,
    message: string
}

export interface ITokenInfoDecoded {
    exp: number,
    iat: number,
    jti: string,
    token_type: string,
    user_id: number | undefined
}

export interface IReviewData {
    title?: string,
    description: string
    rating: number,
    toy: number | undefined,
    user: number | undefined
}

export interface IUserOrderToy {
    category: number,
    cost: number,
    description: string,
    id: number,
    is_published: boolean,
    reviews: IReview[],
    slug: string,
    title: string
}

export interface IUserOrder {
    id: number,
    items: IUserOrderItem[],
    status: string,
    total_price: number
}

export interface IPhotosArr {
    image_url: string
}
export interface IUserOrderItem {
    amount: number,
    photos: IPhotosArr[],
    id: number,
    in_cart: boolean,
    total: number,
    toy: IUserOrderToy
}

export interface IUserInfoProfile {
    id: number,
    user: string,
    country: string,
    town: string,
    date_joined: string,
}

export interface IUserFeedback {
    email: string,
    message: string,
    status: string,
    user: number
}

