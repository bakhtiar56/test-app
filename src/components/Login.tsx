// Login.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <input type="text" placeholder="Enter your username" />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <p>Login Successful</p>
      )}
    </div>
  );
};

export default Login;