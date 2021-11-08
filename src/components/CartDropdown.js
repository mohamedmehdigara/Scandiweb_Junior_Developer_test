import React, { Component } from 'react'
import "./css/CartDropdown.css";





export default class CartDropdown extends Component {
    constructor() {
        super();
        this.state = { backgroundImage:"https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",};
      }
   
    render() {
        return (
            <div className="cart_dropdown" >    
            <div className="item_cnt">
                <h3>My Bag,<span> 2 items</span></h3>
            </div>
            <div className="item_box">
                <div className="title_box">
                    <div className="title">
                        <h1>Apollo Running Short</h1>
                    </div>
                    <div className="price"><h1>$ 100</h1></div>
                   
                </div>
                <div className="rem_add">
                    <div className="plus">+</div>
                    <div className="count">5</div>
                    <div className="minus">-</div>
                </div>
                <div className="pic_box" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}>
                </div>
            </div>
            <div className="checkout_controll">
                <div className="total_box">
                    <div className="total">
                        <h3>Total</h3>
                        <h3>$ 100.00</h3>
                    </div>
                    <div className="buttons">
                        <div className="cart_view" onClick={()=>window.location.href="/cart"}><h5>VIEW CART</h5></div>
                        <div className="checkout"><h5>CHECKOUT</h5></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
