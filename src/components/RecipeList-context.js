import React, {useContext} from "react"
import Recipe from "./Recipe-props+state"
import {RecipeContext} from './App-context'

function RecipeList(recipes) {
const handleRecipeAdd = useContext(RecipeContext)

  return (
    <>
      <div className="recipe-list">
        <div>
          {recipes.map(recipe => {
            return (
              <Recipe
                key={recipe.id}
                {...recipe}
              />
            )
          })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
          <button onClick={handleRecipeAdd} className="btn btn--primary">
            Add recipe
          </button>
        </div>
      </div>
    </>
  )
}

export default RecipeList
