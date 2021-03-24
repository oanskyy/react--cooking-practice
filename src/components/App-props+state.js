import React, { useState } from "react"
import RecipeList from "./RecipeList-props+state"
import { v4 as uuidv4 } from "uuid"


function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 tbs" }]
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) { 
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }



  return (
    <div>
      <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} handleRecipeDelete={handleRecipeDelete} />
    </div>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on Chicken \n2. Put chicken in oven \n3. Eat the chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Kg"
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 tbs"
      }
    ]
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions:
      "1. Put paprika on Pork \n2. Put pork in oven \n3. Eat the pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "1.5 Kg"
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 tbs"
      }
    ]
  }
]

export default App
