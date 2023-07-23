interface IProductPhotos{
    photo:string
}
export interface IProduct{
    slug:string,
    photos: IProductPhotos[],
    description:string,
    cost:string
}

export interface IUserReg{
    username:string,
    email:string,
    password:string
}

export interface IUserAuth{
    username:string,
    password:string
}

export interface IJWTKeys{
    refresh:string,
    access:string
}

export interface IMainPagePicture{
    photo:string
}

export interface IProductToCart{
    toy:number | undefined,
    user:number | undefined,
    amount:number
}

export interface IProductPageInfo{
    category:{
        id:number,
        name:string,
        slug:string
    },
    cost:number,
    description:string,
    overall_rating:number,
    photos:IMainPagePicture[],
    review:string[],
    slug:string,
    title:string
}

export interface IToyInCart{
    amount:number,
    toy:number
}

export interface IToysInCart{
    items:IToyInCart[],
    total_price:number,
    user:number
}

export interface IFeedbackData{
    user:number,
    email:string,
    message:string
}
