import { InitialState } from './GlobalContextState';

export type Action = {
    type: string;
    payload: string;
};

/**
 * Reducer function for GlobalContext
 * @param state
 * @param action
 */
export const reducer = (state: InitialState, action: Action): InitialState => {
    switch (action.type) {
        case 'SET_APP_NAME':
            return {
                ...state,
                appName: action.payload,
            };
        case 'RESET_APP_NAME':
            return {
                ...state,
                appName: process.env.APP_PATH || '',
            };
        case 'CLEAR_APP_NAME':
            return {
                ...state,
                appName: action.payload,
            };
        default:
            return state;
    }
};
