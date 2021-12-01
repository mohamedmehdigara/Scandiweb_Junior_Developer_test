

export const AddToCart = (item) => dispatch => {
    dispatch({
        type:"add_to_cart",
        cart: item,
      });

}
export const RemoveFromCart = (itm) => dispatch => {

  dispatch({
      type:"remove_from_cart",
      item: itm,
    });

}
export const UpdateAtributes =(atributes,id)=> dispatch =>{
  dispatch({
    type:"update_cart_atributes",
    id:id,
    atributes: atributes,
  });
}
export const OpenCloseMinicart = (bool) => dispatch => {

  dispatch({
      type:"openClose_minicart",
      stateOfMinicart: bool,
    });

}
export const OpenCloseCurreny = (bool) => dispatch => {
  dispatch({
      type:"openClose_currency",
      stateOfCurrenyBox: bool,
    });

}