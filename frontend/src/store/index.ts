import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from 'redux-thunk'
import productReducer, { IOneProductState, IProductState } from "./product/Reducer";
import categoryReducer, { ICategoryState, IOneCategoryState } from "./categories/Reducer";
import orderReducer, { IOneOrderState, IOrderState } from "./order/Reducer";
import orderDetailReducer, { IOrderDetailState } from "./oder-detail/Reducer";
import userReducer, { IUserState } from "./user/Reducer";
export interface IRootState {
    products: IProductState
    product: IOneProductState
    categories: ICategoryState
    category: IOneCategoryState
    orders: IOrderState
    order: IOneOrderState
    orderDetails: IOrderDetailState
    users: IUserState;
}

const rootReducer = combineReducers({
    products: productReducer,
    product: productReducer,
    categories: categoryReducer,
    category: categoryReducer,
    orders: orderReducer,
    order: orderReducer,
    orderDetails: orderDetailReducer,
    users: userReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk));
