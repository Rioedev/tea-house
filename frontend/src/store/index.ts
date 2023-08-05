import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import productReducer, { IOneProductState, IProductState } from "./product/Reducer";
import categoryReducer, { ICategoryState, IOneCategoryState } from "./categories/Reducer";
import orderReducer, { IOneOrderState, IOrderState } from "./order/Reducer";
import orderDetailReducer, { IOrderDetailState } from "./oder-detail/Reducer";
export interface IRootState {
    products: IProductState
    product: IOneProductState
    categories: ICategoryState
    category: IOneCategoryState
    orders: IOrderState
    order: IOneOrderState
    orderDetails: IOrderDetailState
}

const rootReducer = combineReducers({
    products: productReducer,
    product: productReducer,
    categories: categoryReducer,
    category: categoryReducer,
    orders: orderReducer,
    order: orderReducer,
    orderDetails: orderDetailReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))