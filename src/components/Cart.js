import React, { Component } from 'react'
import "./css/Cart.css";

export default class Cart extends Component {
    constructor() {
        super();
        this.state = { backgroundImage:"https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
                        images: [ "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"]
    };
      }
    handleImages(AdSub){
       let index = this.state.images.findIndex(x=>x === this.state.backgroundImage);
       console.log(index);
        if(index === this.state.images.length - 1){
            this.setState({
                backgroundImage:this.state.images[0]
            })
        }
        else if(AdSub === 'plus'){
            this.setState({
                backgroundImage:this.state.images[index+1]
            })
        }
        else if(AdSub === 'minus'){
           if(index === 0 ){
            index = this.state.images.length - 1;
           }
           this.setState({backgroundImage:this.state.images[index - 1]})   
        }

    }
    render() {
        return (
            <div className="cart_name_box">
                <div className="cart_inner_box">
                <div className="cart_name">
                    <h1>CART</h1>
                </div>
                <div className="cart_item">
                  <div className="cart_item_inner_info">
                        <h1>Sony</h1>
                        <h2>Playstation</h2>
                        <h5>$50.00</h5>
                  </div>
                  <div className="cart_item_inner_image_cnt">
                             <div className="image_cart_buttons">
                          
                                    <div className="plus_btn">+</div>
                                    <div className="count">5</div>
                                    <div className="minus_btn">-</div>
                                
                            </div>
                             <div className="image_cart_car" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}>
                                <div onClick={()=>this.handleImages("minus")} >
                                    <svg transform="rotate(180)" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M1 13L7 7L1 1" stroke="white" stroke-width="2" fill="gray" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div onClick={()=>this.handleImages("plus")}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M1 13L7 7L1 1" stroke="white" stroke-width="2" fill="gray" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                      </div>
                   </div>
                </div>                
            </div>
        )
    }
}
