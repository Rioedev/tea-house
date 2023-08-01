import instence from "./instence"

export const getAllCategory = () => {
    return instence.get("/categories")
}
export const getOneCateogrory = (id: string) => {
    return instence.get(`/categories/${id}`)
}