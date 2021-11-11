import React, { Component } from 'react'
import "./css/Atributes.css";
import "./css/ItemPage.css";
import { connect } from 'react-redux';

class Atributes extends Component {
    constructor() {
        super();
        this.state = {
            itemID:'',
            atribs:{},
            price:0
    };
      }
    handleAddToCart(id,atributes){
        console.log(id,atributes)
    }
    handleAtrSelector(atr_name,atr_val){
       this.state.atribs[atr_name] = atr_val;
       console.log(this.state.atribs)
    }
    render() {
        return (
            <div className="atribute_inner"> 
           
            {Object.entries(this.props.data).map(([k,v])=>{
        
                return(
                <div className="atr_box">
                    
                    <h3>{v.name.toUpperCase()}:</h3>
                    <div>
                    
                    {v.items.map(a=>{
                        
                        return( <div onClick={()=>this.handleAtrSelector(v.name,a.displayValue)} className="display_val">{a.displayValue}</div> )
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
                        })}
                       
            </div>
                    <div onClick={()=>this.handleAddToCart(this.props.id,this.state.atribs)} className="spec_add_cart">
                            <h4>ADD TO CART</h4>
                    </div>
                   
            </div>
            
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        curentSymb: state.Currency.cur
    }
}
export default connect(mapStateToProps,null)(Atributes) 