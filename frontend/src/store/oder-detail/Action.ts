import { getAll } from "@/API/OrderDetails"
import { getOrderDetailDispatchType } from "./Type"

export interface IOrderDetail {
    _id: string,
    orderId: string,
    productId: string,
    price: number,
    quantity: number,
    totalMoney: number
}


interface IOrderDetailPayload {
    orderDetails: IOrderDetail[]
}

export type GetOrderDetailAction = {
    type: "getAll-OrderDetail"
    payload: IOrderDetailPayload
}

export const fetchOrderDetailAction = (id: string | undefined) => {
    return async (dispatch: getOrderDetailDispatchType) => {
        try {
            const { data: { data: { orderDetail } } } = await getAll(id)
            dispatch({
                type: "getAll-OrderDetail",
                payload: {
                    orderDetails: orderDetail
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

