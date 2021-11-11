import React, { Component } from 'react'
import "./css/Main.css";
import "./css/ProdCard.css";
import {GetProductList} from "../actions/ProductListAction"
import { SetCurrency } from '../actions/SetCurrency';
import { connect } from 'react-redux';
import {
    Link,
  } from "react-router-dom";


class Main extends Component {
    constructor() {
        super();
        this.state = { 
           dats:[]          
        };
      }
      componentDidMount(){

        this.props.dispProd("ALL");
        console.log(this.props.curentSymb.symb);
        typeof(this.props.curentSymb.symb)=== "undefined"?this.props.setCurrency("USD","$"):console.log('got cur');
        console.log(this.props.curentSymb.symb);

     };
    
    render() {
        return (
            <div className="outer_main">
                <div className="inner_main">
                    <div className="cat_name">
                   <h1>{this.props.categ.category}</h1>
                    </div>
                   
                    <div className="prod_catal">
                        <div className="inner_catal">
                           
                             {this.props.data.map(x=>{
                               
                               return(
                                <Link to={`/item/$${x.id}*/`}>
                                <div id={x.inStock?x.id:"out_of_stock"} className="prod_card">
                                        <div className="prod_card_inner">
                                        <div style={{ backgroundImage: `url(${x.gallery[0]})` }}   className="image_box">
                                        <p>OUT OF STOCK</p>
                                           
                                        </div>
                                        <div className="title">
                                            <h3>{x.name}</h3>
                                            
                                        </div>
                                        <div className="price">
                                         
                                            {x.prices.map((x)=>{
                                              
                                                return(
                                                    x.currency===this.props.curentSymb.symb?<h3>{this.props.curentSymb.cur} {x.amount}</h3>:""
                                                ) 
                                            })}
                                        </div>
                                        </div>
                                        <div  className="add_cart">
                                                <svg  width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="26" cy="26" r="26" fill="#5ECE7B"/>
                                                <path transform="translate(15,18)" d="M19.5613 3.87359C19.1822 3.41031 18.5924 3.12873 17.9821 3.12873H5.15889L4.75914 1.63901C4.52718 0.773016 3.72769 0.168945 2.80069 0.168945H0.653099C0.295301 0.168945 0 0.450523 0 0.793474C0 1.13562 0.294459 1.418 0.653099 1.418H2.80069C3.11654 1.418 3.39045 1.61936 3.47434 1.92139L6.04306 11.7077C6.27502 12.5737 7.07451 13.1778 8.00152 13.1778H16.4028C17.3289 13.1778 18.1507 12.5737 18.3612 11.7077L19.9405 5.50575C20.0877 4.941 19.9619 4.33693 19.5613 3.87365L19.5613 3.87359ZM18.6566 5.22252L17.0773 11.4245C16.9934 11.7265 16.7195 11.9279 16.4036 11.9279H8.00154C7.68569 11.9279 7.41178 11.7265 7.32789 11.4245L5.49611 4.39756H17.983C18.1936 4.39756 18.4042 4.49824 18.5308 4.65948C18.6567 4.81994 18.7192 5.0213 18.6567 5.22266L18.6566 5.22252Z" fill="#FFFFFF"/>
                                                <g transform="translate(19,30)">
                                                <path d="M2.68754 0.981445C1.48747 0.981445 0.498047 1.92766 0.498047 3.07515C0.498047 4.22264 1.48755 5.16886 2.68754 5.16886C3.88753 5.16886 4.87703 4.22264 4.87703 3.07515C4.85647 1.92837 3.88753 0.981445 2.68754 0.981445ZM2.68754 3.90112C2.20306 3.90112 1.82387 3.53852 1.82387 3.07523C1.82387 2.61195 2.20306 2.24935 2.68754 2.24935C3.17201 2.24935 3.55121 2.61195 3.55121 3.07523C3.55121 3.51884 3.15064 3.90112 2.68754 3.90112Z" fill="#FFFFFF"/>
                                                </g>
                                                <g transform="translate(30,30)">
                                                <path d="M2.68754 0.981445C1.48747 0.981445 0.498047 1.92766 0.498047 3.07515C0.498047 4.22264 1.48755 5.16886 2.68754 5.16886C3.88753 5.16886 4.87703 4.22264 4.87703 3.07515C4.85647 1.92837 3.88753 0.981445 2.68754 0.981445ZM2.68754 3.90112C2.20306 3.90112 1.82387 3.53852 1.82387 3.07523C1.82387 2.61195 2.20306 2.24935 2.68754 2.24935C3.17201 2.24935 3.55121 2.61195 3.55121 3.07523C3.55121 3.51884 3.15064 3.90112 2.68754 3.90112Z" fill="#FFFFFF"/>
                                                </g>
                                                </svg>
                                        </div>
                                    </div>
                                    </Link>

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
    categ: state.ProductShow
}
}

const mapDispatchToProps = dispatch=>{
    return{
        setCurrency : (k,v) => dispatch(SetCurrency(k,v)),
        dispProd : (cat) => dispatch(GetProductList(cat))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main) 