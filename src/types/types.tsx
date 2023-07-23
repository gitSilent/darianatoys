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
    toy:string,
    user:string,
    amount:number
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
