import { AddOrderAction, GetOneOrderAction, GetOrdersAction, UpdateOrderAction } from "./Action";

export type getOrderDispatchType = (args: GetOrdersAction) => GetOrdersAction
export type getOneOrderDispatchType = (args: GetOneOrderAction) => GetOneOrderAction
export type addOrderDispatchType = (args: AddOrderAction) => AddOrderAction
export type updateOrderDispatchType = (args: UpdateOrderAction) => UpdateOrderAction