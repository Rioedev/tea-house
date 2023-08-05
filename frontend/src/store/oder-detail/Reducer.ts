import { GetOrderDetailAction, IOrderDetail } from "./Action"

export interface IOrderDetailState {
    orderDetails: IOrderDetail[]
}

const initOrderState: IOrderDetailState = {
    orderDetails: []
}

type ICombinedOrderDetailAction = GetOrderDetailAction
type ICombinedOrderDetailState = IOrderDetailState

const orderDetailReducer = (state: ICombinedOrderDetailState = initOrderState, action: ICombinedOrderDetailAction) => {
    switch (action.type) {
        case "getAll-OrderDetail":
            state = {
                ...state,
                orderDetails: action.payload.orderDetails
            }
            break;
    }
    return state
}

export default orderDetailReducer