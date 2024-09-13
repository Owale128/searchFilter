import { IPerson } from "../model/IPerson";

export interface IAction <T> {
    type: ActionType;
    payload?: T ;
}

export enum ActionType {
    SET_QUERY,
    SET_DATA,
    SET_SORT
}
export interface IState {
    query: string;
    data: IPerson[];
    asc: boolean;
}

export const initialState: IState = {
    query: '',
    data: [],
    asc: false
}


export const FormReducer = (state: IState, action: IAction<string | IPerson[]>) => {

    switch(action.type) {
        case ActionType.SET_DATA:
            return {...state, data: action.payload as IPerson[]};

        case ActionType.SET_QUERY:
            return {...state, query: action.payload as string}

        case ActionType.SET_SORT:
            return {...state, asc: !state.asc }

            default:
                return state
    }
}