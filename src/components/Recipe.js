import React from "react";

function Recipe({meal}) {
    return (
        <div className="recipe">
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
            <div className="meal-description">{meal.strMeal}</div>
        </div>
    )
}

export default Recipe;