import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderConfirmed = (event) => {

        event.preventDefault();
        this.setState( { loading: true } );
        const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
            customer: {
                name: 'Rohith',
                address: {
                street: 'Teststreet 1',
                zipCode: '12345',
                country: 'Ind'
                },
                email: 'test@test.com'
            },
        deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
        .then( response => {
            this.setState({ loading: false });
            this.props.history.push('/');
        } )
        .catch( error => {
            this.setState( { loading: false} );
        } );
    }

    render() {
        let form = null;
        if (this.state.loading) {
            form = (<Spinner />);
        } else {
            form = (
                <form >
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street name" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />

                    <Button btnType="Success" clicked={this.orderConfirmed}> ORDER </Button>
                </form>
                );
        }


        return (
            <div className={classes.ContactData}>
                <h4> Enter Your Contact Details </h4>
                {form}
            </div>
            );
    }
}

export default ContactData;