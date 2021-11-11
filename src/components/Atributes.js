import React, { Component } from 'react'
import "./css/Atributes.css";
import "./css/ItemPage.css";

export default class Atributes extends Component {
    render() {
        return (
            <div className="atribute_inner"> 
           
            {Object.entries(this.props.data).map(([k,v])=>{
                return(
                <div className="atr_box">
                    <h3>{v.name.toUpperCase()}:</h3>
                    <div>
                    {v.items.map(a=>{
                        return(<div className="display_val">{a.value}</div> )
                    })}      
                    </div>
                </div>
            )})}
            </div>
        )
    }
}
