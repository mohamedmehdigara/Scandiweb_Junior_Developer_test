import React, { Component } from 'react';
import Atributes from './Atributes';
import { request, gql } from 'graphql-request';
import parse from 'html-react-parser';
import "./css/ItemPage.css";
import { connect } from 'react-redux';



 class ItemPage extends Component {
    constructor() {
        super();
        this.state = { backgroundImage:"https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
                        item_data:[],
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
    getLinkId(){
       return window.location.href.split('$').pop().split('*')[0];
    }
    
    componentDidMount(){
            const query = gql`
            {
                product(id:"${this.getLinkId()}"){
                    id
                    gallery
                    name
                    inStock
                    attributes{
                        id
                        name
                        items{
                          displayValue
                          value
                          id
                        }
                      }
                    description
                    brand 
                    prices{
                      currency
                      amount
                    }
                
                }
              }
            `
            request('http://localhost:4000/', query).then(data =>{
                
              this.setState({
                  item_data: data,
                  images: data.product.gallery,
                  backgroundImage: data.product.gallery[0]
              })
            });
        }
        

    render() {
    if(this.state.item_data === null){
        return <h1>...Loading </h1>
    }else{
      return(
        <div className="spec_prod_box">
       {Object.entries(this.state.item_data).map(([k,v])=>{
        return( <div id={this.props.overlay.OpenMiniCart?"overlay":'safe'} className="spec_center_peace">
            <div className="spec_img_box">
                            <div className="picture_buttons">
                                {
                                this.state.images.map(x=>{
                                   return(
                                    <div onClick={()=>this.setMainPic(x)} className="btn_pic">
                                    <img src={x} alt={`${v.name}`} />
                                    </div>
                                   )
                                }) } 
                            </div>
                                <div className="spc_pic">
                                    <div className="pic" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}> 
                                    </div>
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







    