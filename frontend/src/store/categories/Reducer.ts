import { GetCategoryAction, GetOneCategoryAction, ICategory } from "./Action"

export interface ICategoryState {
    categories: ICategory[]
}

export interface IOneCategoryState {
    category: ICategory
}

const initCategoryState: ICategoryState = {
    categories: []
}

const initOneCategoryState: IOneCategoryState = {
    category: {} as ICategory
}

type combinedCategoryAction = GetCategoryAction | GetOneCategoryAction
type combinedCategoryState = ICategoryState | IOneCategoryState
const categoryReducer = (state: combinedCategoryState = initCategoryState && initOneCategoryState, action: combinedCategoryAction) => {
    switch (action.type) {
        case "get-category":
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case "getOne-category":
            state = {
                ...state,
                category: action.payload.category
            }
            break;
    }
    return state
}

export default categoryReducer