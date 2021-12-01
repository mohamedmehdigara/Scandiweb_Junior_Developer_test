import React, { Component } from 'react'
import "./css/Main.css";
import "./css/ProdCard.css";
import {GetProductList} from "../actions/ProductListAction";
import {AddToCart} from "../actions/ShoppingCartAction";
import { SetCurrency} from '../actions/SetCurrency';
import { connect } from 'react-redux';
import GreenCart from './iconComponents/GreenCart';
import { GiveCorrectPrice, stageItemMain, empt} from '../DataWork/dataChanger';
import {Link} from "react-router-dom";


class Main extends Component {
      componentDidMount(){
        typeof(this.props.curentSymb.symb)=== "undefined"?this.props.setCurrency("USD","$"):empt();
        this.props.data.length===0?this.props.dispProd("ALL"):empt();
     };
    

    render() {
        return (
<div className="outer_main">
   <div className="inner_main">
      <div className="cat_name">
         <h1>{this.props.categ.category}</h1>
      </div>
      <div id={this.props.overlay.OpenMiniCart?"overlay":'safe'} className="prod_catal">
         <div className="inner_catal">
            {this.props.data.map((x,key)=>{
            return(
            <div key={key} className="inner_div" >
            <Link to={`/item/$${x.id}*/`}>
            <div id={x.inStock?x.id:"out_of_stock"} className="prod_card">
               <div className="prod_card_inner">
                  <div className="image_box">
                     {!x.inStock?<p id="oos">OUT OF STOCK</p>:''}
                     <img src={x.gallery[0]} alt="" />
                  </div>
                  <div className="title" id="title_main">
                     <h3>{x.brand} {x.name}</h3>
                  </div>
                  <div className="price">
                     <h3>{GiveCorrectPrice(x.prices,this.props.curentSymb)}</h3>
                  </div>
               </div>
            </div>
            </Link>
            {x.inStock?<div className="add_cart" onClick={()=>this.props.sendToCart(stageItemMain(x))} ><GreenCart  /></div>:<></>}
                  
               
            </div>
            )
            })}      
         </div>
      </div>
   </div>
</div>
        )
    }
}
const mapStateToProps = (state)=>{
return{
    curentSymb: state.Currency.cur,
    data: state.ProductShow.data,
    categ: state.ProductShow,
    overlay: state.CartReducer,
    cartCount: state.CartReducer.count,
}
}

const mapDispatchToProps = dispatch=>{
    return{
        setCurrency : (k,v) => dispatch(SetCurrency(k,v)),
        dispProd : (cat) => dispatch(GetProductList(cat)),
        sendToCart: (item) => dispatch(AddToCart(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main) 



