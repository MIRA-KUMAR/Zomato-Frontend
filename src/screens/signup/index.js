import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const [error, setError] = React.useState('');

    const navigate = useNavigate();

    const doSignup = async () => {
        const result = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            body: JSON.stringify({
                name: {
                    first: firstName,
                    last: lastName,
                },
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
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
            navigate('/login');
        }
    };

    return (
        <div>
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                name="lastName"
                placeholder="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
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
                onClick={doSignup}
            >
                Signup
            </button>
        </div>
    );
}
