import React from 'react'
import { ArrowRight, Clock, HandPlatter, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { bannerData } from '../../backend/bannerData';


const BannerSlider = () => {
    const settings = { infinite: true, speed: 200, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, pauseOnHover: false };

    return (
        <section>
            <Slider {...settings}>
                {bannerData.map((item, key) => (
                    <div className='w-full h-[calc(100vh-72px)] relative' key={key}>
                        <img src={item.image} alt={item.title} className='w-full h-[105%] object-cover'/>
                        <div className="tint w-full h-[105%] bg-black bg-opacity-70 absolute top-0 left-0"></div>
                        <div className='absolute max-w-[400px] top-1/2 md:left-[calc((100vw-1200px)/2)] p-4 text-white md:max-w-[500px] -translate-y-1/2'>
                            <h2 className='md:text-5xl'>{item.title}</h2>
                            <ul className='flex gap-5 mb-5'>
                                <li className='flex gap-2 items-center'><Clock/> {item.prepTime}</li>
                                <li className='flex gap-2 items-center'><Utensils/> {item.servings} Servings</li>
                                <li className='flex gap-2 items-center capitalize'><HandPlatter/> {item.category}</li>
                            </ul>
                            <p className='mb-5'>{item.description}</p>
                            <Link to={`/recipe/single/${item.title.replaceAll(" ", "-")}`} className='flex gap-3 group items-center hover:text-accent transition-all font-bold'>
                                View Full Recipe 
                                <ArrowRight size={18} className='opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 stroke-accent'/>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default BannerSlider
