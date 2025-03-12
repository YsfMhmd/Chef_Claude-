import "../styles/GetRecipe.css"
export default function GetRecipe(props){
    return (
        <div className="get-recipe">
            <div className="text">
                <h2>Ready for a recipe?</h2>
                <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={props.onClick}>Get a recipe</button>
        </div>
)
}