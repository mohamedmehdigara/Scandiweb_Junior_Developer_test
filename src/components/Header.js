import React, { Component } from 'react';
import CartDropdown from './CartDropdown';
import MinicartIcon from './iconComponents/MinicartIcon';
import MainLogo from './iconComponents/MainLogo'
import { GetProductList } from '../actions/ProductListAction';
import {OpenCloseMinicart, OpenCloseCurreny} from '../actions/ShoppingCartAction';
import { connect } from 'react-redux';
import {
    Link,
  } from "react-router-dom";
import "./css/Header.css";
import CurrencyDropdown from './CurrencyDropdown';


class Header extends Component {
    constructor() {
        super();
        this.state = { currentCategories:["TECH","CLOTHES","ALL"]} }
   
    render() {
        return (
            <div className="outer_header">
            <div className="inner_header">
               <div className="cat_selectors">
                  <div className="inner_selectors">
                     {this.state.currentCategories.map((x,id)=>{
                     return(
                     <div key={id} onClick={()=>this.props.dispProd(x)}>
                        <h1>
                           <Link to="/" >{x}</Link>
                        </h1>
                     </div>
                     )
                     })}
                  </div>
               </div>
              <MainLogo />
               <div className="cart_menu">
                  <div id="currency" className="curency_box" onClick={()=>this.props.OpenCloseCur(!this.props.Minicart.OpenCurreny)}  >
                     <h1 id='currency'>{this.props.curentSymb.cur}</h1>
                  </div>
                  <div className="arrow_box"  onClick={()=>this.props.OpenCloseCur(!this.props.Minicart.OpenCurreny)} >
                     <div className="arrow">
                        <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                            {this.props.Minicart.OpenCurreny?<CurrencyDropdown />:<></>}
                     </div>
                  </div>
                  <div className="cart_box"  >
                     <div className="cart_logo" onClick={()=>this.props.cartCount!==0?this.props.OpenCloseMini(!this.props.Minicart.OpenMiniCart):''}   >
                      <MinicartIcon cartCount={this.props.cartCount} cartstatus={this.props.Minicart.OpenMiniCart} cartOpenClose={this.props.OpenCloseMini}  />
                     </div>
                     {this.props.Minicart.OpenMiniCart?<CartDropdown />:<></>}
                       
                    
                  </div>
               </div>
            </div>
            {this.props.Minicart.OpenMiniCart?<div className="overlay"></div>:<></>}
         </div>
         
        )
    }
}
const mapDispatchToProps = dispatch =>{
        return{
            dispProd : (cat) => dispatch(GetProductList(cat)),
            OpenCloseMini: (bool) => dispatch(OpenCloseMinicart(bool)),
            OpenCloseCur : (bool) => dispatch(OpenCloseCurreny(bool))
        }
    }
const mapStateToProps = (state)=>{
        return{
            cartCount: state.CartReducer.count,
            curentSymb: state.Currency.cur,
            Minicart : state.CartReducer
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Header) 
