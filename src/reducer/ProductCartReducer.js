const DefaultState = {
    loading:false,
    data:[],
    errorMsg:'',
}

const ProductCartReducer = (state = DefaultState,action) =>{
    switch(action.type){
        case "List_loading":
            return{
                ...state,
                loading: true,
                errorMsg: "",
            };
            case "List_loading_failed":
                return{
                    ...state,
                    loading:false,
                    errorMsg:"unable to get list"
            };
            case "List_sucseeded":
                return{
                    ...state,
                    loading: false,
                    data: action.payload.results,
                    errorMsg: "",
                }
            default:
                return state
    }
}
export default ProductCartReducer;