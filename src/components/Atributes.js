import React, { Component } from 'react'
import "./css/Atributes.css";
import "./css/ItemPage.css";
import { connect } from 'react-redux';
import { SetCurrency } from '../actions/SetCurrency';
import {AddToCart} from "../actions/ShoppingCartAction"

class Atributes extends Component {
    constructor() {
        super();
        this.state = {
            itemID:'',
            atribs:{},     
            price:0,
            notSelectError:false
            
    };
      }
    giveEmptyval(){
        return ""
    }
    componentDidMount(){
        typeof(this.props.curentSymb.symb)=== "undefined"?this.props.setCurrency("USD","$"):this.giveEmptyval();
    }
    atributeIndicator(atributes,id){
        let indicator = '';
        Object.entries(atributes).map(([k,v])=>{
            indicator +=`${v}`;
            return ''
    
        })
        return indicator + id;
    }
    handleAddToCart(id,pricePack,brand,gallery,name,dataCount){
        const atrib = {...this.state.atribs,};
        let itemCount = 1;
        const indicator = this.atributeIndicator(this.state.atribs,id)
        const Cart ={
            atrib,
            id,
            pricePack,
            brand,
            gallery,
            name,
            indicator,
            itemCount,
        };
        if(Object.keys(atrib).length<dataCount){
            this.setState({notSelectError : true})
        }else{
            this.setState({notSelectError : false});
            this.props.sendToCart(Cart);
        }
    }
    handleAtrSelector(atr_name,atr_val,box_name,color,e){

        this.state.atribs[atr_name]= atr_val;
        this.handleHighlight(box_name,color,e);
    }
    handleHighlight(box_name,color,e){
        var parentDiv = document.querySelector(`.${box_name}`);
        
        parentDiv.querySelectorAll('*').forEach(n => n.setAttribute('style',"color:black; background-color:white;"));
        if(color.includes("#")){
            e.target.setAttribute('style',`color:${color==='#FFFFFF'?'black':'white'}; background-color:${color};`)
        }else{
            e.target.setAttribute('style',`color:white; background-color:black;`)
        }
       
    }
    render() {   
        return (
            <div className="atribute_inner">
            {Object.entries(this.props.data).map(([k,v])=>{
                return(
                <div className="atr_box">
                    
                    <h3>{v.name.toUpperCase()}:</h3>
                    <div className={v.name.replace(/\s/g, "")}>
                    
                    {v.items.map(a=>{
                        return( <div onClick={(e)=>this.handleAtrSelector(v.name,a.value,v.name.replace(/\s/g, ""),a.value,e)}  className="display_val">{a.value.includes("#")?a.displayValue:a.value}</div> )
                    })}      
                    </div>
                </div>
            )})}
    
            <div className="price_box">
                        <h3>PRICE:</h3>
                        {this.props.prices.map(x=>{
                            
                            if(x.currency===this.props.curentSymb.symb){
                                return <h4>{this.props.curentSymb.cur} {x.amount}</h4>
                            }
                            return ""
                            
                        })}
                       
            </div>
                
                {this.state.notSelectError?<p style={{color:"red",fontSize:"15px",textAlign:"center"}}>You need to select all atributes</p>:""}
                {this.props.inStock?<div onClick={()=>this.handleAddToCart(this.props.id,this.props.prices,this.props.brand,this.props.gallery,this.props.name,this.props.data.length)} className="spec_add_cart"><h4>ADD TO CART</h4></div>:<div style={{backgroundColor:"gray"}} className="spec_add_cart"><h4>Out of Stock</h4></div>}
                   
            </div>
            
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        curentSymb: state.Currency.cur,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        setCurrency : (k,v) => dispatch(SetCurrency(k,v)),
        sendToCart: (item) => dispatch(AddToCart(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Atributes) 