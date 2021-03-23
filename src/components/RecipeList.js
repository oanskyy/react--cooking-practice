import React from "react"
import Recipe from "./Recipe"

function RecipeList({ recipes }) {
  return (
    <>
      <div>
        {recipes.map(recipe => {
          return <Recipe key={recipe.id} {...recipe} />
        })}
      </div>
      <button>Add recipe</button>
    </>
  )
}

export default RecipeList
