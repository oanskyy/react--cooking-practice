import React from "react"
import Ingredient from "./Ingredient"

function IngredientList({ ingredients }) {
  const ingredientEl = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />
  })

  return <div>{ingredientEl}</div>
}

export default IngredientList
