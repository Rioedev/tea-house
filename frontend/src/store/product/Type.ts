import { GetProductAction, GetProductsAction } from "./Action";

export type getListDispatchType = (args: GetProductsAction) => GetProductsAction
export type getOneDispatchType = (args: GetProductAction) => GetProductAction