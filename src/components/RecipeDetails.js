import React, { useState , useEffect} from "react";

function RecipeDetails() {

    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        fetch("http://localhost:4000/meal")
        .then(res => res.json())
        .then(data => setRecipe(data[0]))
    }, [])

    return (
        <>
            {
            recipe ?
            <div className="recipe-details">
                <h3>{recipe.strMeal}</h3>
                <h4>{recipe.strArea} - {recipe.strCategory}</h4>
                <div className="image-ingredients">
                    <div className="img">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <div className="ingredients">
                        {
                            Object.keys(recipe).filter(key => key.startsWith("strIngredient"))
                            .map((key, index) => {
                                return recipe[key] ? <div key={index} className="ingredient">
                                    <img src={`https://www.themealdb.com/images/ingredients/${recipe[key]}.png`} alt={recipe[key]} />
                                    <div className="measure">{recipe[`strMeasure${key.slice(-1)}`]}</div>
                                </div> : null
                            })
                        }
                    </div>
                </div>
                <div className="video-instructions">
                    <video width="320" height="240" controls>
                        <source src="https://www.youtube.com/watch?v=-hqL1vU4nds" />
                    </video>
                    <div className="instructions">
                        {
                            recipe[`strInstructions`].split('\r\n').map((sentence, index) => {
                                return <li key={index} className="steps">{sentence}</li>
                            })
                        }
                    </div>
                </div>
            </div>
            : null
            }
        </>
    )
}

export default RecipeDetails;