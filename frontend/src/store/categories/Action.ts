import { getAll } from "@/API/Products"
import { getListCategoryDispatchType, getOneCategoryDispatchType } from "./Type"
import { getAllCategory, getOneCateogrory } from "@/API/Categories"
import { IProduct } from "../product/Action"

export interface ICategory {
    _id: string
    name: string
    image: string
    products: IProduct[]
}

interface IGetCategoryPayload {
    categories: ICategory[]
}

interface IGetOneCategoryPayload {
    category: ICategory
}

export type GetCategoryAction = {
    type: "get-category",
    payload: IGetCategoryPayload
}

export type GetOneCategoryAction = {
    type: "getOne-category",
    payload: IGetOneCategoryPayload
}

export const fetchCategoryAction = () => {
    return async (dispatch: getListCategoryDispatchType) => {
        try {
            const { data } = await getAllCategory()
            dispatch({
                type: "get-category",
                payload: {
                    categories: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const fetchOneCategoryAction = (id: string) => {
    return async (dispatch: getOneCategoryDispatchType) => {
        try {
            const { data } = await getOneCateogrory(id)
            dispatch({
                type: "getOne-category",
                payload: {
                    category: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}