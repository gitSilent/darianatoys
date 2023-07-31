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
    description: string,
    title: string,
    username: string
}

export interface IProductPageInfo {
    category: {
        id: number,
        name: string,
        slug: string
    },
    id:number,
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
    toy: IToyInCartToy
    total_price: number
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
    title: string,
    description: string
    rating: number,
    toy: number | undefined,
    user: number
}