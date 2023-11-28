import { createContext, Dispatch, FC, ReactNode, useCallback, useContext } from 'react';
import { Action } from '@src/context/GlobalContext/reducer';

export interface GlobalContextDispatchProps {
    children: ReactNode;
    dispatch: Dispatch<Action>;
}

interface InitialGlobalContextDispatch {
    dispatch: Dispatch<Action>;
    clearAppName: () => void;
    setAppName: (appName: string) => void;
}

export const GlobalContextDispatch = createContext<InitialGlobalContextDispatch>({
    dispatch: () => {
    },
    clearAppName: () => {
    },
    setAppName: () => {
    },
});

/**
 * Custom hook to use the global context dispatch
 * @example const { dispatch, setAppName } = useGlobalContextDispatch();
 */
export const useGlobalContextDispatch = () => {
    const context = useContext(GlobalContextDispatch);
    if (context === undefined) {
        throw new Error('useGlobalContextDispatch must be used within a GlobalContextDispatchProvider');
    }
    return context;
};

/**
 * Secondary context provider to provide the dispatch to children elements
 * @description Does not provide the state and avoids unnecessary re-renders
 */
export const GlobalContextDispatchProvider: FC<GlobalContextDispatchProps> = ({ children, dispatch }) => {

    const clearAppName = useCallback(() => {
        dispatch({ type: 'CLEAR_APP_NAME', payload: '' });
    }, [dispatch]);

    const setAppName = useCallback((appName: string) => {
        dispatch({ type: 'SET_APP_NAME', payload: appName });
    }, [dispatch]);

    return (
        <GlobalContextDispatch.Provider value={{ dispatch, clearAppName, setAppName }}>
            {children}
        </GlobalContextDispatch.Provider>
    );
};
