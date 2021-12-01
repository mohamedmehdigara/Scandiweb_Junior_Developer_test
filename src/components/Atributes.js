import React, { Component } from 'react'
import "./css/Atributes.css";
import "./css/ItemPage.css";
import { connect } from 'react-redux';
import { SetCurrency } from '../actions/SetCurrency';
import {AddToCart} from "../actions/ShoppingCartAction"
import { AtributeSetter,isSelected, isSelectedColor, setAtribColor,GiveCorrectPrice,empt } from '../DataWork/dataChanger';
// to difrent file


class Atributes extends Component {
    constructor() {
        super();
        this.state = {
          selAtribs : [],
          atributeError: false,
      };
      }
    componentDidMount(){
        typeof(this.props.curentSymb.symb)=== "undefined"?this.props.setCurrency("USD","$"):empt();
    }
   sendToCart(obj,atributes,selectedAtributes){
    if(atributes.length !== selectedAtributes.length){
        this.setState({atributeError:true})
    }else{
        this.setState({atributeError:false});
        this.props.sendToCart(obj);
        this.setState({selAtribs:[]})
    }
   }
 
    render() {   
        return (
            <div className="atribute_inner">
            {Object.entries(this.props.data).map(([k,v],key)=>{
                return(
                <div  key={key} className="atr_box">
                    <h3>{v.name.toUpperCase()}:</h3>
                    <div className={v.name.replace(/\s/g, "")}>
                    {v.items.map((a,key)=>{
                    return(
                    <div key={key} 
                    onClick={()=>this.setState({selAtribs: AtributeSetter(this.state.selAtribs,v.name,a.value)})} 

                    id={isSelected(this.state.selAtribs,v.name,a.value)?'selected':''}
                    
                    style={a.value.includes('#')? setAtribColor(a.value):{backgroundColor:null}}

                    className="display_val">{a.value.includes("#")?isSelectedColor(this.state.selAtribs,v.name,a.value):a.value}</div> )
                    })}      
                    </div>
                </div>
            )})}
            <div className="price_box">
                        <h3>PRICE:</h3>
                        <h4>{GiveCorrectPrice(this.props.prices,this.props.curentSymb)}</h4>
            </div>
            
                {this.state.atributeError?<p id="atributeError">Please select Attributes</p>:<></>}
                {this.props.inStock?<div onClick={()=>this.sendToCart(
                    {
                        id:this.props.id,
                        itemCount: 1,
                        name: this.props.name,
                        brand: this.props.brand,
                        prices: this.props.prices,
                        gallery: this.props.gallery,
                        attributes:this.props.data,
                        selectedAtributes: this.state.selAtribs
                    },
                    this.props.data,
                    this.state.selAtribs)}
        className="spec_add_cart"><h4>ADD TO CART</h4></div>:<div style={{backgroundColor:"gray"}} className="spec_add_cart"><h4>Out of Stock</h4></div>}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        curentSymb: state.Currency.cur,
        cartCount: state.CartReducer.count,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        setCurrency : (k,v) => dispatch(SetCurrency(k,v)),
        sendToCart: (item) => dispatch(AddToCart(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Atributes) 