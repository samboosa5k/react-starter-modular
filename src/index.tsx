import { App } from '@apps/App';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

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

