import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import { Route } from 'react-router-dom';

import ContactData from '../../containers/Checkout/ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: null,
      
    }

    componentWillMount() {

        const query = new URLSearchParams(this.props.location.search);

        const ingredient = {};
        let price = 0;
        for (let param of query.entries()) {

            if (param[0] === 'price') {
                price = param[1];
            }
            else {
                ingredient[param[0]] = +param[1];
            }
        }
        console.log(ingredient);
        console.log(price);

        this.setState({ ingredients: ingredient, totalPrice: price });
    }

    cancelClickedHandler = () => {
        this.props.history.goBack();
    }

    continueClickedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>

                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    continueClicked={this.continueClickedHandler}
                    cancelClicked={this.cancelClickedHandler}
                />

                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) =>
                        (<ContactData ingredients={this.state.ingredients}
                            price={this.state.totalPrice} {...props} />)} />

            </div>
        );
    }
}

export default Checkout;