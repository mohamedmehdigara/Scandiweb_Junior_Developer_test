import React, { Component } from 'react'
import "./css/CartDropdown.css";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { SetCurrency } from '../actions/SetCurrency';
import {OpenCloseMinicart} from '../actions/ShoppingCartAction';
import { calculateSum, GiveCorrectPrice,empt } from '../DataWork/dataChanger';
import MinicartItem from './MinicartItem';
import "./css/Cart.css";



 class CartDropdown extends Component {
    constructor() {
        super();
        this.closeDropdownCart = this.closeDropdownCart.bind(this);
        this.state = {
            indicator:'.'
        };
        }
    closeDropdownCart(event){
        const parentComp = document.querySelector('.cart_dropdown_main');
        const buttonComp =document.querySelector('.cart_box');
        !parentComp.contains(event.target)&&!buttonComp.contains(event.target)?this.props.OpenCloseMini(false):empt();
    }
    componentDidMount(){
        document.addEventListener('mousedown',this.closeDropdownCart);
                     
    }
    componentWillUnmount(){
        document.removeEventListener('mousedown',this.closeDropdownCart)
    }
    removeItem(indicator){
        this.props.cartCount === 1?this.props.OpenCloseMini(false):empt();
        this.props.removeItem(indicator);
    }

    render() {
        return (
        <div className="cart_dropdown_outer">
            <div className="cart_dropdown_main" >    
                <div className="cart_count_box">
                    <div className="cart_count_dropdown"><h1>My Bag, <span>{this.props.cartCount} items</span></h1></div>
                </div>
                {this.props.cart.map((x,key)=>{
                    return  <MinicartItem key={key} thisItem={x} price={GiveCorrectPrice(x.prices,this.props.curentSymb)}id={x.cartId} imageLink={x.gallery[0]} name={x.name} brand={x.brand} atributes={x.attributes} selectedAtr={x.selectedAtributes} itemCount={x.itemCount} />
                })}
                <div className="total_sum_box">
                    <div className="total_sum">
                        <h3>Total:</h3>
                        <h3>{calculateSum(this.props.cart,this.props.curentSymb)}</h3>
                    </div>
                </div>
                <div className="button_box_outer">
                <Link to={`/cart`}>
                    <div className="button_cart">
                        <div>
                            <h5>VIEW BAG</h5>
                        </div>
                    </div>
                    </Link>
                    <div className="button_checkout">
                        <div>
                            <h5>CHECK OUT</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        setCurrency : (k,v) => dispatch(SetCurrency(k,v)),
        OpenCloseMini: (bool) => dispatch(OpenCloseMinicart(bool))
    }
}
const mapStateToProps = (state)=>{
    return{
        cartCount: state.CartReducer.count,
        cart: state.CartReducer.cart,
        curentSymb: state.Currency.cur,
        overlay: state.CartReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartDropdown) 







