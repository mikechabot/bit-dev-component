import React, { Component } from 'react';
import { products } from './products';
import './product-list.css';
import _ from 'lodash';

export default class ProductList extends Component {
    share() {
        window.alert('The product has been shared!');
    }

    view() {
        window.alert('The product has been viewed!');
    }

    buy() {
        window.alert('The product has been bought!');
    }

    getProduct(product, index) {
        return (
            <div key={index}>
                <h3>
                    <a title={product.name + ' details'} href="/">{product.name}</a>
                </h3>
                <p>Description: {product.description} </p>
                <button className="btn" onClick={this.share}>Share</button>
                <button className="btn" onClick={this.view}>View</button>
                <button className="btn" onClick={this.buy}>Buy</button>
            </div>
        )
    }

    render() {
        return (
            <>
                <h2>Products</h2>
                <br/>
                <h3>Using lodash import without treeshaking!</h3>
                {_.keys({foo: 'bar', baz: 'qux'})}
                <div>
                    {
                        products.map((product, index) => {
                            return this.getProduct(product, index);
                        })
                    }
                </div>
            </>
        );
    }
}
