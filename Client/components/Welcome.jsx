export default function Login() {
    import { useState } from 'react';

    export default function Login({ setLoggedIn }) {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

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

export default function Welcome({ loggedIn, setLoggedIn }) {
    console.log('Welcome -> loggedIn', loggedIn);
  
    return (
      <div className="d-flex justify-content-center align-items-center mt-4">
        {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
        {loggedIn ? (
          <div className="card text-center" style={{ width: 480 }}>
            <div className="card-body">
              <span role="img" aria-label="tada">
                🎉
              </span>
              <h5 className="card-title">You are signed in!</h5>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => setLoggedIn(!loggedIn)}
              >
                Log out
              </button>
            </div>
          </div>
        ) : (
          // If we are logged out, render this:
          <div className="card text-center" style={{ width: 480 }}>
            <div className="card-body">
              <span role="img" aria-label="stopsign">
                🛑
              </span>
              <h5 className="card-title">You are currently logged out</h5>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => setLoggedIn(!loggedIn)}
              >
                Log in
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

 