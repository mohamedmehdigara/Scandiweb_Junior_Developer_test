const CurencyObject ={
    symb: "USD",
    cur: "$"
}

const CurrencyReducer = (state = CurencyObject,action) =>{
    switch(action.type){
            case "Got_currencies":
                return{
                    cur: action.data
                }
            default:
                return state
    }
}
export default CurrencyReducer ;