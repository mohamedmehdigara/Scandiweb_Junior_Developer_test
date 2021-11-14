

export const AddToCart = (item) => dispatch => {

    dispatch({
        type:"add_to_cart",
        cart: item,
      });

}
export const RemoveFromCart = (item) => dispatch => {

  dispatch({
      type:"remove_from_cart",
      itemId: item,
    });

}
export const OpenCloseMinicart = (bool) => dispatch => {

  dispatch({
      type:"openClose_minicart",
      stateOfMinicart: bool,
    });

}