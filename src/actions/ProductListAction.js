import {GetProductListData} from '../GraphQl/GqlFunctions';

export const GetProductList = (category) => async  dispatch => {
  const data = await GetProductListData(category.toLowerCase());
  dispatch({
    type:"List_sucseeded",
    payload: data
  }) 
}
