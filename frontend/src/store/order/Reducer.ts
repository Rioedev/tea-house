import { AddCartAction } from "./Action"

export interface IOrder {
    productID: string
    quantity: number
    image: string
    name: string
    price: number
    totalPrice: number
}

export interface IOrderState {
    orders: IOrder[]
}

const initOrderState: IOrderState = {
    orders: []
}

const orderReducer = (state: IOrderState = initOrderState, action: AddCartAction): IOrderState => {
    switch (action.type) {
        case "add-cart":
            const orderExistOrder = state.orders.findIndex(order => order.productID === action.payload._id)
            if (orderExistOrder === -1) {
                state = {
                    ...state,
                    orders: [{
                        productID: action.payload._id,
                        name: action.payload.name,
                        quantity: 1,
                        price: action.payload.price,
                        image: action.payload.images?.[0],
                        totalPrice: 0
                    }, ...state.orders]
                }
            } else {
                state.orders[orderExistOrder].quantity += 1
                state = {
                    ...state,
                    orders: state.orders
                }
            }
            break
    }
    return state
}

export default orderReducer