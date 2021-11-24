import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkout = (props) => {
    return (

        <div className={classes.CheckoutSummary}>
            <h1> We hope you Will Like the Taste</h1>

            <div style={{ width: '100%', margin: 'auto' }}>

                <Burger ingredients={props.ingredients} />
            </div>

            <Button
                btnType="Danger"
                clicked={props.cancelClicked}>CANCEL </Button>
            <Button
                btnType="Success"
                clicked={props.continueClicked}> CONTINUE </Button>
        </div>
        );
}

export default checkout;