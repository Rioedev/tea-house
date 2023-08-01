import instence from "./instence";

export const getAll = () => {
    return instence.get("/products")
}

export const getOne = (id: string | undefined) => {
    return instence.get(`/products/${id}`)
}