import React from "react"
import RecipeList from "./components/RecipeList"
// import './App.css';

function App() {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
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
