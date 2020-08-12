import React from 'react';
import './Products.css';
import {Link, Switch, Route} from 'react-router-dom';
import Product from '../Product/Product';

class Products extends React.Component {
    constructor(props){
        super(props);
        const productList = [
            {name: 'Bicycle',
            id: 1,
            price: 30,
            quantity: 15,
            desc: 'Bicycle is Good'
            },
            {name: 'TV',
            id: 2,
            price: 40,
            quantity: 16,
            desc: 'TV is Good'
            },
            {name: 'Pencil',
            id: 3,
            price: 50,
            quantity: 17,
            desc: 'Pencil is Good'
            }
        ];
        this.state={
            products:productList
        }
    }
    render() {
        return <div className='products'>
            <h1>All Products:</h1>
            <ul>
                {
                    this.state.products.map(item => (
                    <li key={item.id}>
                        <Link 
                        to={`/products/${item.id}`}
                        style={{color:'red'}}>
                            {item.name}</Link>
                    </li>
                    ))
                }
            </ul>
            <Switch>
                <Route path='/products/:id' component={Product} />
            </Switch>
        </div>
    }
}

export default Products;