import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'
import { LogoSvg, cartSvg, profileSvg } from '../../media/svgIcons'
import { textStyle } from '../../styles/style'

export default function Header() {
    return (
        <>
            <div className='flex justify-between fixed top-0 left-0 z-40 h-fit bg-white w-full '>

                <Menu />

                <div className='flex items-center min-w-[210px] min-h-[71px] w-full lg:py-7 lg:px-9 lg:w-screen lg:border lg:flex lg:justify-between'>
                    <div className='min-w-44 m-auto lg:m-0'>
                        <Link className='' to={'/'}>
                           {LogoSvg}
                        </Link>
                    </div>
                    <ul className='hidden lg:flex lg:items-center lg:gap-14'>
                        <li>
                            <Link className={textStyle.headerText} to={'/'}>Главная</Link>
                        </li>
                        <li>
                            <Link className={textStyle.headerText} to={'/products'}>Товары</Link>
                        </li>
                        <li>
                            <Link className={textStyle.headerText} to={'/about'}>О нас</Link>
                        </li>
                        <li>
                            <Link className={textStyle.headerText} to={'/feedback'}>Обратная связь</Link>
                        </li>
                    </ul>
                    <div className='flex gap-5 items-center w-fit pr-3 '>
                        <Link to={'/cart'}>
                            {cartSvg}
                        </Link>
                        <Link to={'/profile'}>
                            {profileSvg}
                        </Link>
                    </div>
                </div>


            </div>
        </>
    )
}
