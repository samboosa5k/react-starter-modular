import { withContextAndLogging } from '@HOC/index';
import {
    useGlobalContext,
    useGlobalContextDispatch,
} from '@context/GlobalContext';

export const ItemWithRenderCount = withContextAndLogging(
    ({ renderCount, logProps }) => {
        const { appName } = useGlobalContext();
        const { setAppName } = useGlobalContextDispatch();

        const updateAppName = (name: string) => {
            setAppName(name);
            logProps({ name, renderCount });
        };
        return (
            <>
                <h2 onClick={(e) => logProps(e.currentTarget.innerText)}>
                    {appName || 'Item With Render Count'}
                </h2>
                <p>{renderCount}</p>
                <button onClick={() => updateAppName('name 1')}>
                    Name change 1
                </button>
                <button onClick={() => updateAppName('Name 2')}>
                    Name change 2
                </button>
            </>
        );
    }
);
