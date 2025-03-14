import "../styles/Recipe.css"
import ReactMarkdown from 'react-markdown'
export default function Recipe(props){
    let finalRecipe = props.recipe.substring(props.recipe.indexOf('###'))
    if (finalRecipe[finalRecipe.length - 1] === "}") {
    finalRecipe = finalRecipe.substring(0, finalRecipe.length - 1);
}
    return(
        <section className= "recipe">
        <h2>Suggested recipe:</h2>
        <ReactMarkdown>{finalRecipe}</ReactMarkdown>
        </section>
    )
}