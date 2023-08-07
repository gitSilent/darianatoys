import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IMainPagePicture, IToyInCartToy } from '../../types/types'
import { Link, useNavigate } from 'react-router-dom'

interface IProps {
    photos: IMainPagePicture[],
    slug: string,
}

export default function MainImage({ photos, slug }: IProps) {
    return (
        <div className='xs:w-[300px] xs:h-[300px] w-[330px] h-[330px] relative border border-gray-400 rounded-xl hover:cursor-pointer hover:scale-[101%] duration-[150ms] '>
            <Link to={`/product/?id=${slug}`}>
                <img src={photos[0].image_url} alt="product" className='object-contain w-full min-h-full rounded-xl ' />
            </Link>
        </div>
    )
}
