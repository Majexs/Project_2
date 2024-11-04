import Login from "./Login";
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

 
