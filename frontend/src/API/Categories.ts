import { ICategory } from "@/store/categories/Action";
import instence from "./instence"

const token = JSON.parse(localStorage.getItem("user")!)?.accessToken;

export const getAllCategory = () => {
    return instence.get("/categories")
}
export const getOneCateogrory = (id: string | undefined) => {
    return instence.get(`/categories/${id}`)
}

export const addCategory = (category: ICategory) => {
    // return instence.post(`/products`, product, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // })
    return instence.post(`/categories`, category)
}

export const updateCategory = (id: string | number, category: ICategory) => {
    // return instence.post(`/products`, product, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // })
    return instence.put(`/categories/${id}`, category)
}

export const deleteCategory = (id: string | number) => {
    // return instence.post(`/products`, product, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // })
    return instence.delete(`/categories/${id}`)
}