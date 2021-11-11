

export const GetProductList = (item) => dispatch => {
    const cartItems = [];
    cartItems.push(item);
    dispatch({
        type:"added_to_cart",
        cart: cartItems,
        count: cartItems.length
      });
}
