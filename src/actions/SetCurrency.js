import { request, gql } from 'graphql-request';


export const SetCurrency = (Currency) => dispatch =>{
    
    try{
        dispatch({
            type:"Loading_currency",
        })
        const query = gql`
        {
      currencies
        }
        `
        request('http://localhost:4000/', query).then(data =>{
       console.log(data);
        dispatch({
            type:"Got_currencies",
            payload: data,
            setCur: Currency
        })});
        
    }catch(e){

    }


}