export default function Login() {
    import { useState } from 'react';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    export default function Login({ setLoggedIn }) {
        

        const handleSubmit = (e) => {
            e.preventDefault();
            // Add your login logic here
            if (username === 'admin' && password === 'password') {
                setLoggedIn(true);
            } else {
                alert('Invalid credentials');
            }
        };

        return (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1>Login</h1>
                <p>Please fill out the sections.</p>
                
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    
                    <button
                        type="submit"
                        style={{
                            backgroundColor: 'darkblue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }
  }
