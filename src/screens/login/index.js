import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = React.useState('fizan@gsm.com');
    const [password, setPassword] = React.useState('s,djhfsdfb');
    // const [error, setError] = React.useState('');

    const navigate = useNavigate();

    const doLogin = async () => {
        try {
            const result = await fetch('http://localhost:3001/login', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    type: 'cookie',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            const data = await result.json();

            if (!data.success) {
            // setError(`${data.error[0].path[0]}: ${data.error[0].message}`);
                if (typeof data.error === 'string') {
                    alert(data.error);
                } else {
                    alert(`${data.error[0].path[0]}: ${data.error[0].message}`);
                }
            } else {
                navigate('/');
            }
        } catch (err) {
            console.log(1, err);
        }
    };

    return (
        <div>
            <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="button"
                onClick={doLogin}
            >
                Login
            </button>
        </div>
    );
}
