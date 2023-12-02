import { Button } from '@atoms/Button';
import { TitleWithLogging } from '@molecules/TitleWithLogging';
import { useGlobalContext, useGlobalContextDispatch } from '@context/GlobalContext';

export const App = () => {
    const { appName } = useGlobalContext();
    const { clearAppName, setAppName } = useGlobalContextDispatch();

    return (
        <>
            <TitleWithLogging title={appName} />
            <Button text='Clear App Name' onClick={() => clearAppName()} />
            <Button text='Set App Name' onClick={() => setAppName('abc')} />
        </>
    );
};

export default App;
