import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IMainPagePicture, IToyInCartToy } from '../../types/types'
import { Link, useNavigate } from 'react-router-dom'

interface IProps {
    photos: IMainPagePicture[],
    slug: string,
}

export default function MainImage({ photos, slug }: IProps) {
    return (
        <div className='min-w-[350px] max-w-[480px] min-h-[460px] max-h-[560px] relative border border-gray-400 rounded-xl hover:cursor-pointer hover:scale-[101%] duration-[150ms] '>
            <Link to={`/product/?id=${slug}`}>
                <img src={photos[0].image_url} alt="product" className='object-cover w-full min-h-[350px] rounded-tr-xl rounded-tl-xl ' />
            </Link>
        </div>
    )
}
