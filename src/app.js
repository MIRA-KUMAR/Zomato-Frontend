import React from 'react';
import {
    BrowserRouter, Routes, Route, Outlet, Navigate,
} from 'react-router-dom';

const Dashboard = React.lazy(() => import('./screens/dashboard'));
const Signup = React.lazy(() => import('./screens/signup'));
const Login = React.lazy(() => import('./screens/login'));

function LoggedIn() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
        async function isLoggedIn() {
            const resp = await fetch('http://localhost:3001/introspect', {
                credentials: 'include',
            });
            const { success } = await resp.json();

            setIsAuthenticated(success);
            setIsLoading(false);
        }

        isLoggedIn();
    }, []);

    if (isLoading) {
        return <div>Loading....</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default function App() {
    return (
        <React.Suspense fallback={<div>Loading</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoggedIn />}>
                        <Route index element={<Dashboard />} />
                    </Route>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}
