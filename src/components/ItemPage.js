import React, { Component } from 'react';
import Atributes from './Atributes';
import parse from 'html-react-parser';
import "./css/ItemPage.css";
import { connect } from 'react-redux';
import { getSpecificProduct } from "../GraphQl/GqlFunctions";



 class ItemPage extends Component {
    constructor() {
        super();
        this.state = { 
        item_data:[],
        main_picture: ''
        }
      }
      
    getLinkId(){
        return window.location.href.split('$').pop().split('*')[0];
     }
    componentDidMount(){
        getSpecificProduct(this.getLinkId()).then(item=>{
            this.setState({
                item_data: item
            })
        });
    }
    render(){
    if(this.state.item_data.length === 0){
        return <h1>...Loading </h1>
    }else{
      return(
        <div className="spec_prod_box"> 
        {Object.entries(this.state.item_data).map(([k,v],key)=>{
        return( 
        <div key={key} id={this.props.overlay.OpenMiniCart?"overlay":'safe'} className="spec_center_peace">
           <div className="spec_img_box">
              <div className="picture_buttons">
                 {v.gallery.map((x,key)=>{
                     return(
                        <div key={key} onClick={()=>this.setState({main_picture:x})} className="btn_pic">           
                         <img  src={x} alt={`${v.name}`} />
                        </div>
                        )
                 })} 
              </div>
              <div className="spc_pic">
                 <img src={!this.state.main_picture.length?v.gallery[0]:this.state.main_picture} alt="main_pic" />
              </div>
           </div>
           <div className="spec_info_box">
              <div className="info_center_box">
                 <div className="title_box">
                    <h1>{v.brand}</h1>
                    <h3>{v.name}</h3>
                 </div>
                 <div className="categroy_det">
                    <Atributes data={v.attributes} prices={v.prices} id={v.id} inStock={v.inStock} brand={v.brand} gallery={v.gallery} name={v.name} />
                 </div>
                 <div className="description_spec">
                    {parse(v.description)}
                 </div>
              </div>
           </div>
        </div>
        )})}
     </div>
      )
    }
    }
}
const mapStateToProps = (state)=>{
    return{
        curentSymb: state.Currency.cur,
        overlay: state.CartReducer
    }
}
export default connect(mapStateToProps,null)(ItemPage) 





