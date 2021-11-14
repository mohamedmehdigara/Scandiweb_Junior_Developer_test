import { request, gql } from 'graphql-request';



export const GetProductList = (category) => dispatch => {
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
              attributes{
                id
                name
                type
                items{
                  displayValue
                  value
                  id
                }
              }
            }
          }
        }
        `
        request('http://localhost:4000/', query).then(data =>{

          
          const emptObj = [];       
          data.category.products.map(x=>{
            x.category===category.toLowerCase()?emptObj.push(x):console.log();
            return "";
          })
          dispatch({
            type:"List_sucseeded",
            payload: category !== "ALL"?emptObj:data.category.products,
            cat : category
        }) 
      }
        );
        
    }catch(e){
        dispatch({
            type: "List_loading_failed",
          })
    }
}
