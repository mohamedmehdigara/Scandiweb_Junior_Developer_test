import React, { Component } from 'react'
import "./css/Atributes.css";
import "./css/ItemPage.css";

export default class Atributes extends Component {
    render() {
        return (
            <div className="atribute_inner"> 
                <div className="atr_box">
                    <h3>SIZE:</h3>
                    <div>
                    <div className="display_val">S</div> 
                    <div className="display_val">M</div>      
                    </div>
                </div>
            </div>
        )
    }
}
