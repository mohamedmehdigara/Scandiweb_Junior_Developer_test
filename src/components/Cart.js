import React, { Component } from 'react'
import { connect } from 'react-redux';
import "./css/Cart.css";
import { SetCurrency } from '../actions/SetCurrency';
import { RemoveFromCart,AddToCart  } from '../actions/ShoppingCartAction';
import {setAtribColor, isSelected,isSelectedColor} from '../DataWork/dataChanger';
import CartImgCarousel from './CartImgCarousel';

class Cart extends Component {
render(){   
        return (      
<div className="cart_name_box">
   <div id={this.props.overlay.OpenMiniCart?"overlay":'safe'}className="cart_inner_box">
      <div className="cart_name">
         <h1>CART</h1>
      </div>
    {this.props.cart.map((x,key)=>{
       return(
         <div key={key} className="cart_item">
         <div className="cart_item_inner_info">
            <h1>{x.brand}</h1>
            <h2>{x.name}</h2>
            {x.prices.map(curency=>{
            if(curency.currency===this.props.curentSymb.symb){
            return <h5>{this.props.curentSymb.cur} {curency.amount}</h5>
            }
            return "" 
            })}
            <div className="atrib_box">
            {x.attributes.map(v=>{
               return(
                     <div  className="atrib_vals">
                        <div id="valueName">{v.name}:</div>
                        {v.items.map((i,key)=>{
                           return(
                              <div key={key}  style={setAtribColor(i.value)} className="itemBox" id={isSelected(x.selectedAtributes,v.name,i.value)?"selected":"c"} >{i.value.includes('#')?isSelectedColor(x.selectedAtributes,v.name,i.value):i.value}</div>
                           )
                        })}
                       
                     </div>
               )
            })}
            </div>
         </div>
         <div className="cart_item_inner_image_cnt">
            <div className="image_cart_buttons">
               <div onClick={()=>this.props.sendToCart(x)} className="plus_btn" >+</div>
               <div className="count">{x.itemCount}</div>
               <div onClick={()=>{this.props.removeItem(x)}} className="minus_btn">-</div>
            </div>
            <div id={x.cartId} className="image_cart_car">
               <img src={x.gallery[0]} alt="" />
               {x.gallery.length>1?<CartImgCarousel indicator={x.cartId} gallery={x.gallery} />:<></>}
            </div>
      </div>
   </div>
       )
    })}

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
export default connect(mapStateToProps,mapDispatchToProps)(Cart) 