import React from 'react'
import { Link } from 'react-router-dom'
import { topRecipes } from '../../backend/recipes'



const TopRating = () => {
    return (
        <section className='py-10 md:py-24 bg-dark'>
            <div className="container">
                <h2 className='text-white'>Top Recipes</h2>
                <div className="grid grid-container-top gap-3 md:min-h-[1200px] min-h-[500px]">
                    {topRecipes.map((item, key) => (
                        <div className='grid-item relative h-full w-full bg-black group overflow-hidden' key={key}>
                            <img src={item.image} alt={item.title} className='transition-all group-hover:opacity-70 w-full h-full object-cover group-hover:scale-[1.5] group-hover:rotate-[10deg]'/>
                            <div className='absolute -bottom-24 opacity-0 left-5 text-white group-hover:bottom-5 group-hover:opacity-100 transition-all'>
                                <ul className='text-sm flex gap-4 items-center'>
                                    <li>{item.prepTime}</li>
                                    <li>{item.servings} Servings</li>
                                </ul>
                                <h4 className='mb-2 font-light md:text-xl text-xs'>{item.title}</h4>
                                <Link to="/" className='font-bold'>View Recipe</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopRating
