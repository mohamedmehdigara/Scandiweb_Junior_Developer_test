import React, { Component } from 'react'
import "./css/CartDropdown.css";
import {
    Link,
  } from "react-router-dom";
  import { connect } from 'react-redux';
  import "./css/Cart.css";
  import { SetCurrency } from '../actions/SetCurrency';
  import { RemoveFromCart,AddToCart  } from '../actions/ShoppingCartAction';
  import {OpenCloseMinicart} from '../actions/ShoppingCartAction';
  import _ from 'lodash';



 class CartDropdown extends Component {

    calculateSum(){
        let sum = 0;
        this.props.cart.map(i=>{
            i.pricePack.map(a=>{
                if(a.currency===this.props.curentSymb.symb){
                    sum += a.amount
                }
                return ""
            })
            return''
        })
       return sum.toFixed(2)
    }
    render() {
        this.calculateSum();   
        return (
            <div className="cart_dropdown" >    
            <div className="item_cnt">
                <h3>My Bag,<span> {this.props.cartCount} items</span></h3>
            </div>
            
            {_.uniqWith(this.props.cart, _.isEqual).map(item=>{
              
                return(
                    <div className="item_box">
                    <div className="title_box">
                        <div className="title">
                            <h1><span>{item.brand}</span>{item.name}</h1>
                        </div>
                        <div className="price">
                        {item.pricePack.map(curency=>{
                            if(curency.currency===this.props.curentSymb.symb){
        
                                return <h1>{this.props.curentSymb.cur} {(curency.amount * item.itemCount).toFixed(2)}</h1>
                            }
                            return "" 
                        })}
                        </div>
                        
                       <div className="atributes">
                        <div className="atr_values">
                        {
                            Object.entries(item.atrib).map(([k,v])=>{
                               return(
                                <div className="atrib_vals" style={v.includes('#')?{backgroundColor:`${v}`}:{backgroundColor:"white"}}>
                                        <div>{v.includes('#')?'':v}</div>
                                </div>
                               )
                            })   
                        }
                     
                        </div>
                       </div>
                    </div>
                    <div className="rem_add">
                        <div  onClick={()=>this.props.sendToCart(item)} className="plus">+</div>
                        <div className="count">{item.itemCount}</div>
                        <div onClick={()=>this.props.removeItem(item.indicator)} className="minus">-</div>
                    </div>
                    <div className="pic_box" style={{ backgroundImage: `url(${item.gallery[0]})` }}>
                    </div>
                </div>
    
                )

            })}
      

            


            <div className="checkout_controll">
                <div className="total_box">
                    <div className="total">
                        <h3>Total</h3>
                        <h3>{this.props.curentSymb.cur} {this.calculateSum()} </h3>
                    </div>
                    <div className="buttons">
                        <div className="cart_view"><Link onClick={()=>this.props.OpenCloseMini(false)} to={`/cart`}><h5>VIEW CART</h5></Link></div>
                        <div className="checkout"><h5>CHECKOUT</h5></div>
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
        removeItem: (id)=> dispatch(RemoveFromCart(id)),
        sendToCart: (item) => dispatch(AddToCart(item)),
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