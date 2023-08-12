import { textStyle } from '../../styles/style'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import toy_1 from '../../media/toy_1.jpg'
import toy_2 from '../../media/toy_2.jpg'
import toy_3 from '../../media/toy_3.jpg'
import toy_4 from '../../media/toy_4.jpg'

export default function About() {


  const staticData = [
    {
      "title": "sodales libero interdum",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis varius metus, pulvinar laoreet sapien. Fusce id nisi eget nisl blandit suscipit. Nunc feugiat pulvinar mi, eu suscipit mauris rutrum semper. Ut sed mauris felis. Praesent hendrerit mi est, in sodales libero interdum in. In erat tortor, mattis in posuere in, vehicula non ipsum. In ac risus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
      "img": toy_1
    },
    {
      "title": "sodales libero interdum",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis varius metus, pulvinar laoreet sapien. Fusce id nisi eget nisl blandit suscipit. Nunc feugiat pulvinar mi, eu suscipit mauris rutrum semper. Ut sed mauris felis. Praesent hendrerit mi est, in sodales libero interdum in. In erat tortor, mattis in posuere in, vehicula non ipsum. In ac risus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
      "img": toy_2
    },
    {
      "title": "sodales libero interdum",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis varius metus, pulvinar laoreet sapien. Fusce id nisi eget nisl blandit suscipit. Nunc feugiat pulvinar mi, eu suscipit mauris rutrum semper. Ut sed mauris felis. Praesent hendrerit mi est, in sodales libero interdum in. In erat tortor, mattis in posuere in, vehicula non ipsum. In ac risus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
      "img": toy_3
    },
    {
      "title": "sodales libero interdum",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis varius metus, pulvinar laoreet sapien. Fusce id nisi eget nisl blandit suscipit. Nunc feugiat pulvinar mi, eu suscipit mauris rutrum semper. Ut sed mauris felis. Praesent hendrerit mi est, in sodales libero interdum in. In erat tortor, mattis in posuere in, vehicula non ipsum. In ac risus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
      "img": toy_4
    },
  ]


  return (
    <div className='wrapper'>
      <Header />
      <main className='mainContainer'>
        <div className='xs:h-[78px] md:h-[115px]'></div>
        <h2 className={textStyle.titlesText}>О нас</h2>
        <div className='px-5 md:px-10'>

          {staticData.map((item, idx) => {
            return (
              <div key={idx}>
                <div className='flex flex-col items-center lg:flex-row lg:gap-9 lg:max-w-6xl lg:m-auto'>
                  <img src={item.img} alt="" className="w-[410px]"/>
                  <div className='flex flex-col items-center gap-5'>
                    <h3 className='font-bold uppercase xs:text-xl sm:text-2xl'>{item.title}</h3>
                    <p className='font-light xs:text-lg sm:text-xl mb-10 text-gray-800'>{item.desc}</p>
                  </div>
                </div>
                <hr className='h-[2px] w-3/4 m-auto bg-black/20' />
              </div>
            )
          })}

        </div>
      </main>
      <Footer />
    </div>





  )
}
