import { GetProductAction, GetProductsAction, IProduct } from "./Action";
export interface IProductState {
    products: IProduct[]
}

export interface IOneProductState {
    product: IProduct
}

const initProductState: IProductState = {
    products: []
}
const initOneProductState: IOneProductState = {
    product: {} as IProduct
}

type ICombinedProductAction = GetProductsAction | GetProductAction
type ICombinedProductState = IProductState | IOneProductState
const productReducer = (state: ICombinedProductState = initProductState && initOneProductState, action: ICombinedProductAction) => {
    switch (action.type) {
        case "getAll-product":
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case "getOne-product":
            state = {
                ...state,
                product: action.payload.product
            }
            break;
    }
    return state
}

export default productReducer