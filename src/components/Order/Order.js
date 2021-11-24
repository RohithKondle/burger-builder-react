import React from 'react';
import classes from './Order.css';
import Burger from '../Burger/Burger';

const order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientDisplay = ingredients.map(ig => {
        return (<span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}

            key={ig.name}> {ig.name} ({ig.amount}) 
        </span>
        );
    });

    return (
            <div className={classes.Order}>
                <span >
                    <p>Ingredients : {ingredientDisplay} </p>
                    <p> Price : <strong> USD {props.price.toFixed(2)} </strong> </p>
            </span>
            <span style={{ maxWidth: '1px', maxHeight: '100%', margin: 'auto', display: "block" }}>
                      <Burger ingredients={props.ingredients} />
                 </span>
            </div>
        );
}

export default order;