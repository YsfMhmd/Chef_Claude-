import './App.css'
import Header from "./components/Header.jsx"
import Form from "./components/Form.jsx"
import GetRecipe from "./components/GetRecipe.jsx"
import IngredientsList from './components/IngredientsList.jsx';
import Recipe from "./components/Recipe.jsx"
import React from "react"

const recipeFetched = "this is the recipe needed!"
function App() {

    const [ingredients,setIngredients]=React.useState([]);
    const [recipe,setRecipe] =React.useState("")
    const [time,setTime] =React.useState(false)
    function addIngredient(formData){
        const ing = formData.get("ingredient")
        if(ing.trim()){
          setIngredients((prevIngredients)=>[...prevIngredients,ing])
        }
    }
    function getRecipe(){
      setRecipe(recipeFetched)
    }
    function newRecipe(){
      setIngredients([]);
      setRecipe("")
    }
    function timer(){
      console.log("hello")
      setTimeout(()=>{setTime(true)},2000)
    }
  return (
    <>
    <Header onClick={timer}/>
    <main className="container">
      {time?<Form addIngredient={addIngredient}/>:undefined}
      {ingredients.length ?<IngredientsList ingredients={ingredients}/>:undefined}
      {ingredients.length > 2 ?<GetRecipe onClick={getRecipe}/>:undefined}
      {recipe ?<Recipe recipe={recipeFetched}/>:undefined}
      {recipe ?<button onClick={newRecipe}>Get new recipe?</button>:undefined}
    </main>
    </>
  )
}

export default App
