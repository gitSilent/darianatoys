export interface IProduct{
    id:string,
    img: string,
    desc:string,
    price:string
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
