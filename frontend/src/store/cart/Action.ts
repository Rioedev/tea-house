import { IProduct } from "../product/Action"
import { AddCartDispatchType } from "./Type"

export interface AddCartAction {
    type: "add-cart"
    payload: IProduct
}

export function CartAction(product: IProduct) {
    const action: AddCartAction = {
        type: "add-cart",
        payload: product
    }
    return (dispatch: AddCartDispatchType) => {
        dispatch(action)
    }
}

export default CartAction