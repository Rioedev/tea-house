import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import productReducer, { IOneProductState, IProductState } from "./product/Reducer";
import categoryReducer, { ICategoryState, IOneCategoryState } from "./categories/Reducer";
import orderReducer, { IOrderState } from "./order/Reducer";
export interface IRootState {
    products: IProductState
    product: IOneProductState
    categories: ICategoryState
    category: IOneCategoryState
    orders: IOrderState
}

const rootReducer = combineReducers({
    products: productReducer,
    product: productReducer,
    categories: categoryReducer,
    category: categoryReducer,
    orders: orderReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))