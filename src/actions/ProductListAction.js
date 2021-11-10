import { request, gql } from 'graphql-request';




export const GetProductList = (category) => dispatch => {
  console.log("this works");
  console.log(category)
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
            x.category===category?emptObj.push(x):console.log("pass");
          })
          console.log(emptObj);
          dispatch({
            type:"List_sucseeded",
            payload: category != "all"?emptObj:data.category.products
        }) 
      }
        );
        
    }catch(e){
        dispatch({
            type: "List_loading_failed",
          })
    }
}
