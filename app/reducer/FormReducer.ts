import { IPerson } from "../model/IPerson";

export interface IAction <T> {
    type: ActionType;
    payload?: T ;
}

export enum ActionType {
    SET_QUERY,
    SET_DATA,
    SET_SORT,
    SET_PAGE,
    SET_PAGE_SIZE
}
export interface IState {
    query: string;
    data: IPerson[];
    asc: boolean;
    page: number;
    pageSize: number;
}

export const initialState: IState = {
    query: '',
    data: [],
    asc: false,
    page: 1,
    pageSize: 5
}


export const FormReducer = (state: IState, action: IAction<string | IPerson[] | boolean | number>) => {

    switch(action.type) {
        case ActionType.SET_DATA:
            return {...state, data: action.payload as IPerson[]};

        case ActionType.SET_QUERY:
            return {...state, query: action.payload as string}

        case ActionType.SET_SORT:
            return {...state, asc: !state.asc as boolean }

            case ActionType.SET_PAGE:
                return {...state, page: action.payload as number}

                case ActionType.SET_PAGE_SIZE:
                    return {...state, pageSize: action.payload as number, page: 1}

            default:
                return state
    }
}