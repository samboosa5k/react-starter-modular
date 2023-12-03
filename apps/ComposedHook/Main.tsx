import { GlobalContextProvider } from '@context/GlobalContext';
import { ItemWithRenderCount } from '@molecules/ItemWithRenderCount';

export const ComposedHook = () => (
    <GlobalContextProvider>
        <ItemWithRenderCount />
    </GlobalContextProvider>
);
export default ComposedHook;
