import React, { Component } from "react";
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {

                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                console.log('fetched orders ':fetchedOrders);
                
                this.setState({ loading: false, orders: fetchedOrders });
            }).catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {

        return (
            <div>
                {this.state.orders.length === 0 ?
                    <p style={{ color: "red", textAlign: "center" }}> Oops! You haven't Ordered a Burger yet :( </p> :
                    this.state.orders.map(order => (
                        <Order
                            key={order.id}
                            price={+order.price}
                            ingredients={order.ingredients} />
                    ))}
              </div>
            );
    }
}

export default withErrorHandler(Orders, axios);