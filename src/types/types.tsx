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
