import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

const App = React.lazy(async () => await import(process.env.APP_PATH as string));
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <Suspense fallback={<h1>Loading...</h1>}>
            <App />
        </Suspense>
    </React.StrictMode>,
);

