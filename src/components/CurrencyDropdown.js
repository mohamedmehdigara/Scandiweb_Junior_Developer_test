import React, { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { getCurrencyList } from '../GraphQl/GqlFunctions';
import { connect } from 'react-redux';
import { SetCurrency } from '../actions/SetCurrency';
import {OpenCloseCurreny,OpenCloseMinicart} from '../actions/ShoppingCartAction';

class CurrencyDropdown extends Component {
    constructor() {
        super();
        this.closeDropdown = this.closeDropdown.bind(this);
        this.state = {
            currencyList: []
            }
        }
    CurrencyList(){
        getCurrencyList().then(currenyArray=>{
        if(currenyArray.length !== 0 ){
            this.setState({
                currencyList: currenyArray.currencies
            })
        }
    })
  }
  
  CurrencyChange(name,symbl){
    this.props.setCurrency(name,symbl);
    this.props.OpenCloseCur(false);
  }
  closeDropdown(event){
    if(event.target.id!=='currency'){
        this.props.OpenCloseCur(false);
    }
  }
  componentDidMount(){
    this.CurrencyList();
    document.addEventListener('mousedown',this.closeDropdown);
                 
   }
  componentWillUnmount(){
    document.removeEventListener('mousedown',this.closeDropdown)
   }
  render() {
        if(typeof this.state.currencyList == 'undefined'){
            <p>Loading currencies...</p>
        }else{
            return(
        <div className="dropdwn">
           <div>
                {this.state.currencyList.map(currencie=>{
                    return(
                        <div onClick={()=>this.CurrencyChange(currencie,getSymbolFromCurrency(currencie))} >
                            <h1  id="currency">{getSymbolFromCurrency(currencie)}  {currencie} </h1>
                        </div>
                         )
                    })} 
                </div>
           </div>      
            )
        }
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        setCurrency : (name,symbl) => dispatch(SetCurrency(name,symbl)),
        OpenCloseCur : (bool) => dispatch(OpenCloseCurreny(bool)),
        OpenCloseMini: (bool) => dispatch(OpenCloseMinicart(bool)),
    }
}
const mapStateToProps = (state)=>{
    return{
        cartCount: state.CartReducer.count,
        curentSymb: state.Currency.cur,
        Minicart : state.CartReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CurrencyDropdown) 




