import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IMainPagePicture, IToyInCartToy } from '../../types/types'
import { Link, useNavigate } from 'react-router-dom'

interface IProps {
    photos: IMainPagePicture[],
    slug: string,
}

export default function MainImage({ photos, slug }: IProps) {
    return (
        <div className='xs:w-[298px] xs:h-[298px] w-[298px] h-[298px] relative border border-gray-400 rounded-xl hover:cursor-pointer hover:scale-[101%] duration-[150ms] '>
            <Link to={`/product/?id=${slug}`}>
                <img src={photos[0].image_url} alt="product" className='object-cover rounded-xl w-[300px] h-[300px]' />
            </Link>
        </div>
    )
}
