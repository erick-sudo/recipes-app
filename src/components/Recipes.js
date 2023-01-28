import React,  { useEffect, useState } from "react";
import Recipe from "./Recipe";

function Recipes() {

    const [meals, setMeals] = useState([])

        useEffect(() => {
            fetch("http://localhost:4000/meals")
            .then(response => response.json())
            .then(data => setMeals(data))
        }, [])

    return (
        <div className="recipes">
            {
                meals.map((meal, index) => {
                    return <Recipe key={index} meal={meal} />
                })
            }
        </div>
    )
}

export default Recipes;