import { createContext, FC, ReactNode, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { GlobalContextDispatchProvider } from './GlobalContextDispatch';

/**
 * @description Define the initial state of the context
 */
export interface InitialState {
    appName: string;
}

export const INITIAL_STATE: InitialState = {
    appName: 'initial app name',
};

/**
 * @description Create the context
 */
const GlobalContext = createContext<InitialState>(INITIAL_STATE);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
};

/**
 * @description Create the context provider to provide the state
 */
interface GlobalContextProviderProps {
    children: ReactNode;
}

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <GlobalContext.Provider value={state}>
            <GlobalContextDispatchProvider dispatch={dispatch}>
                {children}
            </GlobalContextDispatchProvider>
        </GlobalContext.Provider>
    );
};
