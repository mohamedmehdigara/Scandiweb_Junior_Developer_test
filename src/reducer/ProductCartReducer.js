import _ from 'lodash';

const DefaultState = {
    indicators:[],
    cart:[],
    count:0
}
const ProductCartReducer = (state = DefaultState,action) =>{
    switch(action.type){
            case "add_to_cart":
                state.cart.push(action.cart);
                state.indicators.push(action.cart.indicator);
                const countPairs =_.countBy(state.indicators);
                state.cart.map(x=>{
                    for(const [key,val] of Object.entries(countPairs)){
                        x.indicator === key?x.itemCount = val:console.log('');
                    }
                });
                return{
                    ...state,
                    cart: state.cart,
                    count:state.cart.length,
                };
            case"remove_from_cart":
               /*  console.log(action.itemId); */
                console.log(typeof action.itemId);
                let counter = 0;
                while(counter < state.cart.length){
                 
                    if(state.cart[counter].indicator.includes(action.itemId)){
                        console.log("boom")
                        console.log(counter)
                        console.log("boom")
                        break;
                    }
                    ++counter;
                
                }
                return{
                    ...state,
                    cart: state.cart,
                    count:state.cart.length,
                };
            default:
                return state
    }
}
export default ProductCartReducer;