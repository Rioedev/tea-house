import { AddCartAction } from "./Action"

export interface ICart {
    productID: string
    quantity: number
    image: string
    name: string
    price: number
}

export interface ICartState {
    carts: ICart[]
}

const initCartState: ICartState = {
    carts: []
}

const cartReducer = (state: ICartState = initCartState, action: AddCartAction): ICartState => {
    switch (action.type) {
        case "add-cart":
            const cartExistCart = state.carts.findIndex(cart => cart.productID === action.payload._id)
            if (cartExistCart === -1) {
                state = {
                    ...state,
                    carts: [{
                        productID: action.payload._id,
                        name: action.payload.name,
                        quantity: 1,
                        price: action.payload.price,
                        image: action.payload.images?.[0],
                    }, ...state.carts]
                }
            } else {
                state.carts[cartExistCart].quantity += 1
                state = {
                    ...state,
                    carts: state.carts
                }
                // localStorage.setItem("cartItems", JSON.stringify(state.carts))
            }
            break
    }
    return state
}

export default cartReducer