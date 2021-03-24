import React from "react"
import IngredientList from "./IngredientList"

// pass in props/variables
// then use destructuring and move it down
// function Recipe({name, cookTime, servings, instructions})
function Recipe(props) {
  const { id, name, cookTime, servings, instructions, ingredients, handleRecipeDelete } = props

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button onClick={() => handleRecipeDelete(id)}>Delete</button>
        </div>
      </div>

      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>

      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>

      <div>
        <span>Instructions</span>
        <div>{instructions}</div>
      </div>

      <div>
        <span>Ingredients</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}

export default Recipe
