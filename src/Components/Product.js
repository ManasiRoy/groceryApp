import React, { Component } from 'react'
import { Data } from './Data'
import ProductList from './ProductList'
import Total from './Total'


class Product extends Component {
    state = {
        ProductData: Data,
        qty: 0,
        updatedPrice: 0
    }
    calculateTotal = (qty, Price) => {
        this.setState({
            qty: this.state.qty + qty,
            updatedPrice: this.state.updatedPrice + Price
        });
    };

    render() {

        const { ProductData } = this.state
        return (
            <div className='container'>
                <div className="productcontainer">
                    {ProductData.map(({ Brandname, ...otherprops }) => (
                        <ProductList key={Brandname} {...otherprops}
                            handleTotal={this.calculateTotal}
                        />
                    ))}
                </div>
                <Total qty={this.state.qty} updatedPrice={this.state.updatedPrice} />
            </div>
        )
    }
}
export default Product