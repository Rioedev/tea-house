import instence from "./instence"

export const getAllCategory = () => {
    return instence.get("/categories")
}
export const getOneCategory = (id: string) => {
    return instence.get(`/categories/${id}`)
}