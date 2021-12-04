import React, { Component } from 'react';
import { RemoveFromCart,AddToCart,UpdateAtributes} from '../actions/ShoppingCartAction';
import { connect } from 'react-redux';
import {setAtribColor, isSelected,isSelectedColor,AtributeSetter, GiveSelectedAtributes} from '../DataWork/dataChanger'
import "./css/MinicartItem.css";


class MinicartItem extends Component {
    constructor() {
        super();
        this.state = {
            selectedAtributes:[],
            editing : false
        };
        }
        
    updateAtributes(atributes,name,value,id){
        this.props.updateAtributes(AtributeSetter(atributes,name,value),id);
        this.setState({
            selectedAtributes:AtributeSetter(atributes,name,value)
        })
    }
    componentDidMount(){
        this.setState({
            selectedAtributes:GiveSelectedAtributes(this.props.cart,this.props.id)
        })
    }
    render() {
        return (
            <div className="mini_cart_item">
                <div className="main_name_atr_box">
                    <div className="main_name_atr_inner">
                            <div className="mini_title_name">
                                <div><h5>{this.props.brand}<br/>{this.props.name}</h5> </div>

                            </div>
                            
                            <div className="mini_item_atributes">
                            <div className="mini_item_price"><div><h5>{this.props.price}</h5></div></div>
                          
                                {this.props.atributes.map((val,key)=>{
                                    return(
                                      
                                        <div key={key}  className="mini_atr_box">
                                        <div>{val.name}:</div>
                                        {val.items.map((item,key)=>{
                                            if(item.value.includes('#')){
                                               
                                                return <div key={key} 
                                                onClick={()=>this.updateAtributes(this.props.selectedAtr,val.name,item.value,this.props.id)}
                                                 style={setAtribColor(item.value)} id="colorsize"
                                                 >{isSelectedColor(this.props.selectedAtr,val.name,item.value)}</div>
                                            }
                                            return <div key={key}
                                             id={isSelected(this.state.selectedAtributes,val.name,item.value)?'selected':''}
                                             onClick={()=>this.updateAtributes(this.props.selectedAtr,val.name,item.value,this.props.id)}>{item.value}</div>
                                        
                                        })}
                                    </div>
                                      
                                    )
                                })}

                            </div>
                    </div>
                </div>

                <div className="addRemove_box">
                    <div className="add"
                    onClick={()=>{this.props.sendToCart(this.props.thisItem)}}
                    >+</div>
                    <div>{this.props.itemCount}</div>
                    <div className="rem"
                    onClick={()=>{this.props.removeItem(this.props.thisItem)}}
                    >-</div>
                </div>

                <div className="minicart_img_box">
                    <div className="minicart_img">
                        <img src={this.props.imageLink} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        removeItem: (id)=> dispatch(RemoveFromCart(id)),
        sendToCart: (item) => dispatch(AddToCart(item)),
        updateAtributes: (atributes,id)=>dispatch(UpdateAtributes(atributes,id))
    }
}
const mapStateToProps = (state)=>{
    return{
        cart: state.CartReducer.cart,
        curentSymb: state.Currency.cur,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MinicartItem) 