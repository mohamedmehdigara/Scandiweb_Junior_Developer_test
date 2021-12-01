import { RemoveItem, GiveCartData, UpdateAtributes, countOfItems} from '../DataWork/dataChanger';

const DefaultState = {
    cart:[],
    count:0,
    OpenMiniCart:false,
    OpenCurreny:false
}

const ProductCartReducer = (state = DefaultState,action) =>{
    switch(action.type){
            case "add_to_cart":
               GiveCartData(state.cart,action.cart);
                return{
                    ...state,
                    cart: state.cart,
                    count: countOfItems(state.cart),
                };
            case"remove_from_cart":
                RemoveItem(state.cart,action.item);
                return{ 
                    ...state,
                    cart: state.cart,
                    count: countOfItems(state.cart),
                };
            case "update_cart_atributes":
                    return{
                        ...state,
                        cart: UpdateAtributes(action.id,state.cart,action.atributes),
                        };
            case "openClose_minicart":
                return{
                    ...state,
                    OpenMiniCart: action.stateOfMinicart
                };
            case "openClose_currency":
                return{
                    ...state,
                    OpenCurreny: action.stateOfCurrenyBox
                    };
            
            default:
                return state
    }
}
export default ProductCartReducer;
