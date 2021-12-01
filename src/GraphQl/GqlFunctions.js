import {
    request,
    gql
} from 'graphql-request';
import {categoryProductList} from '../DataWork/dataChanger';

const endPoint = ' http://localhost:4000/';

export const GetProductListData = async (category) => {
    const query = gql`
    {
        category{
         products{
         id
         brand 
         name
         category
         attributes{
            id
            name
            items{
              displayValue
              value
              id
            }
          }
         gallery
         inStock
         prices{
           currency
           amount
                    }
        }
        }
        }
    `
    try {
        const data = await request(endPoint, query).then(data=> categoryProductList(category,data.category.products));
        return data
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const getSpecificProduct = async(itemId)=>{
    const query = gql`
    {
        product(id:"${itemId}"){
            id
            gallery
            name
            inStock
            attributes{
                id
                name
                items{
                  displayValue
                  value
                  id
                }
              }
            description
            brand 
            prices{
              currency
              amount
            }
        
        }
      }
    `
    try {
        const data = await request(endPoint, query);
        return data
    } catch (error) {
        console.log(error)
        return [];
    }
}
export const getCurrencyList = async ( )=>{
    const query = gql`
    {
        currencies
    }
    `
    try {
        const data = await request(endPoint, query);
        return data
    } catch (error) {
        console.log(error)
        return [];
    }
}
