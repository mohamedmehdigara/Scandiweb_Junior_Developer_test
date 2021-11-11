const DefaultState = {
    data:[],
    count:0,
    errorMsg:'',
}
const ProductCartReducer = (state = DefaultState,action) =>{
    switch(action.type){
            case "Cart_add_failed":
                return{
                    ...state,
                    errorMsg:"unable to add"
            };
            case "added_to_cart":
                return{
                    ...state,
                    data: action.cart,
                    cnt: action.count,
                    errorMsg: "",
                }
            default:
                return state
    }
}
export default ProductCartReducer;