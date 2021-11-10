
export const SetCurrency = (symbol,currency) => dispatch =>{
    const ar = {
        symb: symbol,
        cur: currency
    }
    dispatch({
        type:"Got_currencies",
        data : ar
    })


}