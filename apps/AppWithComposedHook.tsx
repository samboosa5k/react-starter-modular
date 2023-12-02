import { Button } from '@atoms/Button';
import { TitleWithLogging } from '@atoms/Title';
import { GlobalContextProvider, useGlobalContext, useGlobalContextDispatch } from '@src/context';

const App = () => {
    const { appName } = useGlobalContext();
    const { clearAppName, setAppName } = useGlobalContextDispatch();

    return (<>
            <h1>Alternative App (npm run start:app2)</h1>
            <h2>App name:{appName}</h2>
            <TitleWithLogging title={appName} />
            <Button text='Clear App Name' onClick={() => clearAppName()} />
            <Button text='Set App Name' onClick={() => setAppName('abc')} />
        </>
    );
};

export const AppWithComposedHook = () => {
    return (
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    );
};
export default AppWithComposedHook;
