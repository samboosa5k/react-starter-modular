import { GlobalContextProvider } from '@context/GlobalContext';
import { App } from './AppWithComposedHook/index';


export const AppWithComposedHook = () => {
    return (
        <GlobalContextProvider>
            <h1>App With Composed Hooks</h1>
            <App />
        </GlobalContextProvider>
    );
};
export default AppWithComposedHook;
