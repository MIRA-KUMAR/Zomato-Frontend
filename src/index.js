import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './Screens/Auth';
import Dashboard from './Screens/Dashboard';
import Homepage from './Screens/Homepage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
