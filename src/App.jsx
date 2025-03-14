import './App.css'
import Header from "./components/Header.jsx"
import Form from "./components/Form.jsx"
import GetRecipe from "./components/GetRecipe.jsx"
import IngredientsList from './components/IngredientsList.jsx';
import Recipe from "./components/Recipe.jsx"
import React from "react"
import fetchRecipe from './ai.js';
function App() {

    const [ingredients,setIngredients]=React.useState([]);
    const [recipe,setRecipe] =React.useState("")
    function addIngredient(formData){
        const ing = formData.get("ingredient")
        if(ing.trim()){
          setIngredients((prevIngredients)=>[...prevIngredients,ing])
        }
    }
    async function getRecipe(){
      console.log("started")
      setRecipe(await fetchRecipe(ingredients))
      console.log("ended")
    } 
    function newRecipe(){
      setIngredients([]);
      setRecipe("")
    }
  return (
    <>
    <Header/>
    <main className="container">
      <Form addIngredient={addIngredient}/>
      {ingredients.length ?<IngredientsList ingredients={ingredients}/>:undefined}
      {ingredients.length > 2 ?<GetRecipe onClick={getRecipe}/>:undefined}
      {recipe ?<Recipe recipe={recipe}/>:undefined}
      {recipe ?<button className="new-recipe-button"onClick={newRecipe}>Get new recipe?</button>:undefined}
    </main>
    </>
  )
}

export default App
