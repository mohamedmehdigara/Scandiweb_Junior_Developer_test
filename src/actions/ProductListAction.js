import { request, gql } from 'graphql-request';




export const GetProductList = () => dispatch => {
  console.log("this works");
    try{
        dispatch({
            type:"List_loading",

        });
      
        
        const query = gql`
        {
          category{
            products{
              category
              id
              name
              inStock
              gallery
              description
              brand
              prices{
                currency
                amount
              }
            }
          }
        }
        `
        request('http://localhost:4000/', query).then(data =>
        dispatch({
            type:"List_sucseeded",
            payload: data.category.products
        }) );
        
    }catch(e){
        dispatch({
            type: "List_loading_failed",
          })
    }
}
