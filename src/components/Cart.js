import React, { Component } from 'react'
import { connect } from 'react-redux';
import "./css/Cart.css";
import { SetCurrency } from '../actions/SetCurrency';
import { RemoveFromCart,AddToCart  } from '../actions/ShoppingCartAction';
import _ from 'lodash';

class Cart extends Component {

    handleCarouselPrew(id,gal){
        const element = document.getElementById(id.replace(/\s/g));
        let pic = element.firstChild.src;
        let indexOfCurrentPic = gal.indexOf(pic);
        indexOfCurrentPic === 0?element.firstChild.src = gal[gal.length - 1]: element.firstChild.src = gal[indexOfCurrentPic - 1];
    }
    handleCarouselNext(id,gal){
        const element = document.getElementById(id.replace(/\s/g));
        let pic = element.firstChild.src;
        let indexOfCurrentPic = gal.indexOf(pic);
        indexOfCurrentPic === gal.length-1?element.firstChild.src = gal[0]: element.firstChild.src = gal[indexOfCurrentPic + 1];
}
        
    
    render(){   
   
        return (
            
            <div className="cart_name_box">
                <div id={this.props.overlay.OpenMiniCart?"overlay":'safe'}className="cart_inner_box">
                <div className="cart_name">
                    <h1>CART</h1>
                </div>
           
            {
            _.uniqWith(this.props.cart, _.isEqual).map(x=>{
              return( <div className="cart_item">
              <div className="cart_item_inner_info">
                    <h1>{x.brand}</h1>
                    <h2>{x.name}</h2>
                    {x.pricePack.map(curency=>{
                            if(curency.currency===this.props.curentSymb.symb){
                                return <h5>{this.props.curentSymb.cur} {(curency.amount * x.itemCount).toFixed(2)}</h5>
                            }
                            return "" 
                        })}
                        <div className="atrib_box">
                        {
                            Object.entries(x.atrib).map(([k,v])=>{
                               return(
                                <div className="atrib_vals" style={v.includes('#')?{backgroundColor:`${v}`}:{backgroundColor:"white"}}>
                                        <div>{v.includes('#')?'':v}</div>
                                </div>
                               )
                            })   
                        }
                        </div>                     
              </div>
              <div className="cart_item_inner_image_cnt">
                         <div className="image_cart_buttons">
                      
                                <div onClick={()=>this.props.sendToCart(x)} className="plus_btn" >+</div>
                                <div className="count">{x.itemCount}</div>
                                <div onClick={()=>this.props.removeItem(x.indicator)} className="minus_btn">-</div>
                            
                        </div>
                        
                         <div id={x.indicator.replace(/\s/g, "")} className="image_cart_car">
                             <img  src={x.gallery[0]} alt="" />
                             
                            <div id="prew" onClick={()=>this.handleCarouselPrew(x.indicator, x.gallery)} >
                                <svg transform="rotate(180)" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M1 13L7 7L1 1" stroke="white" stroke-width="2" fill="gray" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div id="next" onClick={()=>this.handleCarouselNext(x.indicator, x.gallery)} >
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M1 13L7 7L1 1" stroke="white" stroke-width="2" fill="gray" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                  </div>
               </div>)
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

