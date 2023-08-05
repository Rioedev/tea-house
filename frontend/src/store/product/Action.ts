import { getAll, getOne } from "@/API/Products"
import { getListDispatchType, getOneDispatchType } from "./Type"

export interface IProduct {
    _id: string
    name: string
    price: number
    description_long: string
    images: string[]
    categoryId: { _id: string, products: IProduct[] }
    deleted: boolean
}
interface IGetProductPayload {
    products: IProduct[]
}


interface IgetOneProductPayload {
    product: IProduct
}

export type GetProductsAction = {
    type: "getAll-product",
    payload: IGetProductPayload
}

export type GetProductAction = {
    type: "getOne-product"
    payload: IgetOneProductPayload
}

export const fetchProductAction = () => {
    return async (dispatch: getListDispatchType) => {
        try {
            const { data } = await getAll()
            dispatch({
                type: "getAll-product",
                payload: {
                    products: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const fetOneProductAction = (id: string | undefined) => {
    return async (dispatch: getOneDispatchType) => {
        try {
            const { data: { data } } = await getOne(id)
            dispatch({
                type: "getOne-product",
                payload: {
                    product: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}