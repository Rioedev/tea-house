import { AddOrderAction, GetOneOrderAction, GetOrdersAction, IOrder, UpdateOrderAction } from "./Action";

export interface IOrderState {
    orders: IOrder[]
}

export interface IOneOrderState {
    order: IOrder
}

const initOrderState: IOrderState = {
    orders: []
}

const initOneOrderState: IOneOrderState = {
    order: {} as IOrder
}

type ICombinedOrderAction = GetOrdersAction | GetOneOrderAction | AddOrderAction | UpdateOrderAction
type ICombinedOrderState = IOrderState | IOneOrderState

const orderReducer = (state: ICombinedOrderState = initOrderState && initOneOrderState, action: ICombinedOrderAction) => {
    switch (action.type) {
        case "getAll-Order":
            state = {
                ...state,
                orders: action.payload.orders
            }
            break;
        case "getOne-Order":
            state = {
                ...state,
                order: action.payload.order
            }
            break;
        case "add-Order":
            state = {
                ...state,
                order: action.payload.order
            }
            break;
        case "update-Order":
            state = {
                ...state,
                order: action.payload.order
            }
            break;
    }
    return state
}

export default orderReducer