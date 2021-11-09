import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-element';
import CartDropdown from './CartDropdown';
import { SetCurrency } from '../actions/SetCurrency';
import { GetProductList } from '../actions/ProductListAction';
import { connect } from 'react-redux';
import "./css/Header.css";



class Header extends Component {
    constructor() {
        super();
        this.state = { showCur: false,
                       showCart:false, 
                       currencies:["USD"]
                    };

      }
      componentWillMount(){
        this.props.getCurrency("USD")
        }
      handleClickCur() {
        this.setState({
          showCur: !this.state.showCur,
          showCart: false,
        });
      }
      handleClickCart() {
        this.setState({
          showCart: !this.state.showCart,
          showCur: false,
        });
      }
    handleCurrencyChange(cur){
        this.props.getCurrency(cur);
    }
    render() {
        return (
            <div className="outer_header">
                <div className="inner_header">
                    <div className="cat_selectors">
                        <div className="inner_selectors">
                            <div><h1>WOMEN</h1></div>
                            <div><h1>MEN</h1></div>
                            <div><h1>KIDS</h1></div>
                        </div>
                    </div>
                    <div className="logo">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_150:357)">
                            <path d="M34.0222 28.6646C34.0494 28.983 33.8009 29.2566 33.4846 29.2566H7.46924C7.15373 29.2566 6.90553 28.9843 6.93156 28.6665L8.7959 5.91227C8.8191 5.62962 9.05287 5.41211 9.33372 5.41211H31.5426C31.8226 5.41211 32.0561 5.62853 32.0801 5.91036L34.0222 28.6646Z" fill="#1DCF65"/>
                            <path d="M36.0988 34.6014C36.1313 34.9985 35.8211 35.339 35.4268 35.339H5.59438C5.2009 35.339 4.89092 35.0002 4.92208 34.6037L7.06376 7.34717C7.09168 6.9927 7.38426 6.71973 7.73606 6.71973H33.1958C33.5468 6.71973 33.8391 6.99161 33.868 7.34499L36.0988 34.6014Z" fill="url(#paint0_linear_150:357)"/>
                            <path d="M19.9232 26.6953C16.0402 26.6953 12.8813 22.8631 12.8813 18.1528C12.8813 17.9075 13.0782 17.7085 13.3211 17.7085C13.564 17.7085 13.7608 17.9073 13.7608 18.1528C13.7608 22.3732 16.5253 25.8067 19.9234 25.8067C23.3214 25.8067 26.0859 22.3732 26.0859 18.1528C26.0859 17.9075 26.2827 17.7085 26.5257 17.7085C26.7686 17.7085 26.9654 17.9073 26.9654 18.1528C26.9653 22.8631 23.8062 26.6953 19.9232 26.6953Z" fill="white"/>
                            <path d="M24.2581 18.0337C24.1456 18.0337 24.0331 17.9904 23.9471 17.9036C23.7754 17.7301 23.7754 17.4488 23.9471 17.2753L26.226 14.9729C26.3084 14.8897 26.4203 14.8428 26.5369 14.8428C26.6536 14.8428 26.7654 14.8895 26.8479 14.9729L29.1045 17.2529C29.2762 17.4264 29.2762 17.7077 29.1045 17.8812C28.9327 18.0546 28.6543 18.0547 28.4826 17.8812L26.5368 15.9155L24.569 17.9036C24.4831 17.9904 24.3706 18.0337 24.2581 18.0337Z" fill="white"/>
                            </g>
                            <defs>
                            <linearGradient id="paint0_linear_150:357" x1="29.8733" y1="31.3337" x2="11.5132" y2="9.9008" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#52D67A"/>
                            <stop offset="1" stop-color="#5AEE87"/>
                            </linearGradient>
                            <clipPath id="clip0_150:357">
                            <rect width="31.16" height="30.176" fill="white" transform="translate(4.91992 5.41211)"/>
                            </clipPath>
                            </defs>
                    </svg>
                    </div>
                    <div className="cart_menu">
                        <div className="curency_box">
                            <h1>$</h1>
                        </div>
                        <div className="arrow_box" >
                            <div className="arrow" onClick={()=>this.handleClickCur()}  >
                                <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0.5L4 3.5L7 0.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            <ToggleDisplay show={this.state.showCur}>
                            <div className="dropdwn">
                            
                            {this.state.currencies.map(x=>{
                              
                               return(
                                <div><h1>{x}</h1></div>
                               )
                            })}
                            </div>
                            </ToggleDisplay>
                            </div>
                        </div>
                        <div className="cart_box">
                        <div className="cart_logo" onClick={()=>this.handleClickCart()}>
                        <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5613 3.87359C19.1822 3.41031 18.5924 3.12873 17.9821 3.12873H5.15889L4.75914 1.63901C4.52718 0.773016 3.72769 0.168945 2.80069 0.168945H0.653099C0.295301 0.168945 0 0.450523 0 0.793474C0 1.13562 0.294459 1.418 0.653099 1.418H2.80069C3.11654 1.418 3.39045 1.61936 3.47434 1.92139L6.04306 11.7077C6.27502 12.5737 7.07451 13.1778 8.00152 13.1778H16.4028C17.3289 13.1778 18.1507 12.5737 18.3612 11.7077L19.9405 5.50575C20.0877 4.941 19.9619 4.33693 19.5613 3.87365L19.5613 3.87359ZM18.6566 5.22252L17.0773 11.4245C16.9934 11.7265 16.7195 11.9279 16.4036 11.9279H8.00154C7.68569 11.9279 7.41178 11.7265 7.32789 11.4245L5.49611 4.39756H17.983C18.1936 4.39756 18.4042 4.49824 18.5308 4.65948C18.6567 4.81994 18.7192 5.0213 18.6567 5.22266L18.6566 5.22252Z" fill="#43464E"/>
                             <g transform="translate(4,12)">
                             <path d="M2.68754 0.981445C1.48747 0.981445 0.498047 1.92766 0.498047 3.07515C0.498047 4.22264 1.48755 5.16886 2.68754 5.16886C3.88753 5.16886 4.87703 4.22264 4.87703 3.07515C4.85647 1.92837 3.88753 0.981445 2.68754 0.981445ZM2.68754 3.90112C2.20306 3.90112 1.82387 3.53852 1.82387 3.07523C1.82387 2.61195 2.20306 2.24935 2.68754 2.24935C3.17201 2.24935 3.55121 2.61195 3.55121 3.07523C3.55121 3.51884 3.15064 3.90112 2.68754 3.90112Z" fill="#43464E"/>
                             </g>
                             <g transform="translate(15,12)">
                             <path d="M2.68754 0.981445C1.48747 0.981445 0.498047 1.92766 0.498047 3.07515C0.498047 4.22264 1.48755 5.16886 2.68754 5.16886C3.88753 5.16886 4.87703 4.22264 4.87703 3.07515C4.85647 1.92837 3.88753 0.981445 2.68754 0.981445ZM2.68754 3.90112C2.20306 3.90112 1.82387 3.53852 1.82387 3.07523C1.82387 2.61195 2.20306 2.24935 2.68754 2.24935C3.17201 2.24935 3.55121 2.61195 3.55121 3.07523C3.55121 3.51884 3.15064 3.90112 2.68754 3.90112Z" fill="#43464E"/>
                             </g>
                        </svg>
                        </div>
                        <ToggleDisplay show={this.state.showCart}>
                            <CartDropdown />
                        </ToggleDisplay>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        curCurency: state.Currency.setCurency,
        curency_List: state.Currency.curencyList
    }
    }
    
const mapDispatchToProps = dispatch=>{
        return{
            getCurrency : () => dispatch(SetCurrency()),
            dispProd : () => dispatch(GetProductList())
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Header) 
