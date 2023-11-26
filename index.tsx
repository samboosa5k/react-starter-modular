import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const render = () => {
    const root = createRoot(
        document.getElementById('root') as HTMLElement,
    );
    if (process.env.APP_PATH) {
        const LoadedApp = lazy(async () => await import(process.env.APP_PATH));
        root.render(
            <StrictMode>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <LoadedApp />
                </Suspense>
            </StrictMode>,
        );
    } else {
        root.render(
            <h1>APP_PATH is not defined</h1>,
        );
    }
};

render();
