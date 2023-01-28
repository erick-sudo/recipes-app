import React,  { useEffect, useState } from "react";
import Recipe from "./Recipe";

function Recipes() {

    const [meals, setMeals] = useState([])

        useEffect(() => {
            setMeals([1,2,3,4,5,6,7,8,8,10])
        }, [])

    return (
        <div className="recipes">
            {
                meals.map((meal) => {
                    return <Recipe meal={meal} />
                })
            }
        </div>
    )
}

export default Recipes;