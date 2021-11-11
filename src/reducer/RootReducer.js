import {combineReducers} from "redux";
import CurrencyReducer from "./CurrencyReducer"
import ProductShowReducer from "./ProductShowReducer";
import ProductCartReducer from "./ProductCartReducer";

const RootReducer = combineReducers({
  ProductShow: ProductShowReducer,
  Currency: CurrencyReducer,
  CartReducer: ProductCartReducer,
});

export default RootReducer;