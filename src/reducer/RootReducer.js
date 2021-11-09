import {combineReducers} from "redux";
import CurrencyReducer from "./CurrencyReducer"
import ProductShowReducer from "./ProductShowReducer";

const RootReducer = combineReducers({
  ProductShow: ProductShowReducer,
  Currency: CurrencyReducer
});

export default RootReducer;