//Product.js



import {React, Component} from 'react';

class Product extends Component
{
    render()
    {
        return <>
                <div class="container">
                    <div class="product">
                        <img src="p1.jfif" height="100"/>
                        <h1>Rs.100,000</h1>
                    </div>
                    <div class="product">
                        <img src="p2.jpg" height="100"/>
                        <h1>Rs.70,000</h1>
                    </div>
                </div>
            </>;
    }
}
export default Product;
