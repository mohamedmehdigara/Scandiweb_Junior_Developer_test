import _ from 'lodash';

const  giveEmptyval=()=>{
    return ""
}
const UpdateCartData =(WhatToCount)=>{
const indicatorsEmpt = [];
WhatToCount.map(a=>indicatorsEmpt.push(a.indicator));
const countPairs =_.countBy(indicatorsEmpt);
WhatToCount.map(x=>{
    for(const [key,val] of Object.entries(countPairs)){
        x.indicator === key?x.itemCount = val:giveEmptyval();
    }
    return ''
});
}
const RemoveItem =(cart,what)=>{
const deletableIndexes =[];
let counter = 0;
cart.map(x=>{
x.indicator.includes(what)?deletableIndexes.push(counter):++counter;
return '';
});
cart.splice(deletableIndexes[0],1)

}

const DefaultState = {
    cart:[],
    count:0,
    OpenMiniCart:false
}
const ProductCartReducer = (state = DefaultState,action) =>{
    switch(action.type){
            case "add_to_cart":
                state.cart.push(action.cart);
                UpdateCartData(state.cart);
                return{
                    ...state,
                    cart: state.cart,
                    count:state.cart.length,
                };
            case"remove_from_cart":
              
                RemoveItem(state.cart,action.itemId);
                UpdateCartData(state.cart);
                return{
                    ...state,
                    cart: state.cart,
                    count:state.cart.length,
                };
            case "openClose_minicart":
                return{
                    ...state,
                    OpenMiniCart: action.stateOfMinicart
                };
            default:
                return state
    }
}
export default ProductCartReducer;