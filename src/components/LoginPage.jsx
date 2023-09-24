import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = () => {
    
    if (formData.username === 'your_username' && formData.password === 'your_password') {
      
      alert('Login successful! Redirecting to the home page.');
      
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default LoginPage;
