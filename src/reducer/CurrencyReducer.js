const CurencyObject ={
    curencyList : [],
    setCurency : 'USD', 
}

const CurrencyReducer = (state = CurencyObject,action) =>{
    switch(action.type){
        case "Loading_currency":
            return{
                ...state,
                loading: true,
                errorMsg: "",
            };
            case "Got_currencies":
                return{
                    ...state,
                    loading: false,
                    curencyList: action.payload,
                    setCurency:"USD",
                
                }
            default:
                return state
    }
}
export default CurrencyReducer ;