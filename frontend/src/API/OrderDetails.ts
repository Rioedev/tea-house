import instence from "./instence";

// lấy tất cả các orders
export const getAll = (id: string | undefined) => {
    return instence.get(`/order_details/${id}`)
}