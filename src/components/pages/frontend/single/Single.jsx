import React from 'react'
import Headings from '../Headings'
import Footnote from '../Footnote'
import { Clock, Dot, HandPlatter, Utensils } from 'lucide-react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { topRecipes } from '../../backend/recipes'



const Single = () => {
  const { slug } = useParams()

  // Find the recipe based on slug
  const recipe = topRecipes.find(
    (item) =>
      item.title.toLowerCase() === slug.replaceAll('-', ' ').toLowerCase()
  )

  if (!recipe) return <div className="text-center py-20">Recipe not found</div>

  return (
    <>
      <Headings />
      <section className="bg-dark text-white">
        <div className="container">
          <div className="py-25">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-[500px] w-full object-cover"
            />

            <div className="text-center py-10">
              <h1>{recipe.title}</h1>

              <ul className="flex gap-5 mb-5 justify-center">
                <li className="flex gap-2 items-center">
                  <Clock /> {recipe.prepTime}
                </li>
                <li className="flex gap-2 items-center">
                  <Utensils /> {recipe.servings} Servings
                </li>
                <li className="flex gap-2 items-center">
                  <HandPlatter /> {recipe.category}
                </li>
              </ul>

              <p className="max-w-[600px] mx-auto">{recipe.description}</p>

              <div className="text-left md:grid md:grid-cols-[1.5fr,_3fr] gap-10 max-w-[900px] mx-auto mt-10">
                <div>
                  <h3>Ingredients</h3>
                  {recipe.ingredients.map((item, key) => (
                    <div className="flex gap-2" key={key}>
                      <Dot />
                      <ul className="grid grid-cols-[.6fr,_1fr] mb-2 basis-full">
                        <li>
                          <span>{item.amount}</span> {item.unit}
                        </li>
                        <li>{item.ingredients}</li>
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="wrapper-instruction">
                  <h3>Instruction</h3>
                  <Markdown>{recipe.instruction}</Markdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footnote />
    </>
  )
}

export default Single
