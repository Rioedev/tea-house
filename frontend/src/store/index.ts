import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer, {
  IOneProductState,
  IProductState,
} from "./product/Reducer";
import categoryReducer, {
  ICategoryState,
  IOneCategoryState,
} from "./categories/reducer";
import userReducer, { IUserState } from "./user/Reducer";
export interface IRootState {
  products: IProductState;
  product: IOneProductState;
  categories: ICategoryState;
  category: IOneCategoryState;
  users: IUserState;
}

const rootReducer = combineReducers({
  products: productReducer,
  product: productReducer,
  categories: categoryReducer,
  category: categoryReducer,
  users: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
