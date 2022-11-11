import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Search = React.lazy(() => import('./screens/search'));

export default function App() {
    return (
        <React.Suspense fallback={<div>Loading</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}
