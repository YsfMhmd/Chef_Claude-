import "../styles/Form.css"
import React from 'react'
export default function Form(props){

    return(
        <main>
            <form  action={props.addIngredient} id="ing-form">
            <input className="text-field" name="ingredient" type="text" aria-label="Add ingredient"placeholder="e.g. oregano" />
            <button className="add-button" type="submit">+ Add ingredient</button>
        </form>

        </main>
    )
}