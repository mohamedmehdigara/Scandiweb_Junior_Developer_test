import React, { Component } from 'react'
import "./css/ItemPage.css";


export default class ItemPage extends Component {
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
    setMainPic(link){
        this.setState({
            backgroundImage:link
        })
    }  
    render() {
        return (
            <div className="spec_prod_box">
                <div className="spec_center_peace">
                    <div className="spec_img_box">
                                    <div className="picture_buttons">
                                        {this.state.images.map(x=>{
                                            
                                           return(
                                            <div onClick={()=>this.setMainPic(x)} className="btn_pic">
                                            <img src={x} alt="" />
                                        </div>
                                           )

                                        })}
                                            
                                           
                                           
                                    </div>
                                    
                                        <div className="spc_pic">
                                            <div className="pic" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}>
                                               
                                            </div>
                                        </div>
                                    
                    </div>
                    <div className="spec_info_box">
                        <div className="info_center_box">
                            <div className="title_box">
                                <h1>Sony</h1>
                                <h3>Playstation 5</h3>
                            </div>
                            <div className="categroy_det">

                            </div>
                            <div className="price_box">
                                <h3>PRICE:</h3>
                                <h4>$300.00</h4>
                            </div>
                            <div className="spec_add_cart">
                                    <h4>ADD TO CART</h4>
                            </div>
                            <div className="description_spec">
                            <ul><li><span>Hardware-beschleunigtes Raytracing macht dein Spiel noch realistischer</span></li>
                            <li><span>Spiele Games mit bis zu 120 Bilder pro Sekunde</span></li>
                            <li><span>Minimiere Ladezeiten mit einer speziell entwickelten 512GB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.</span></li>
                            <li><span>Xbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst</span></li>
                            <li><span>Spiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.</span></li> 
                            <li><span>Erwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben</span></li>
                            <li><span>Der brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus</span></li>
                            <li><span>Ultra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher</span></li>
                            <li><span>Verwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr</span></li>
                            <li><span>Erweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr</span></li></ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
