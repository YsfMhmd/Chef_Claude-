export default function IngredientsList(props){
    const listItems = props.ingredients.map((e)=><li>{e}</li>)
    return(
        <>
        <h2>Ingredients on hand:</h2>
        <ul>
            {listItems}
        </ul>      
        </>
    )
}