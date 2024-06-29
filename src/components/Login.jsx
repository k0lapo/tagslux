import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserProfile } from '../context/UserProfileContext';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();
  const { updateUserProfile } = useUserProfile();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleLogin = () => {
    const user = {
      name: formData.username,
      email: 'user@example.com',
      address: '123 Main St',
      phone: '123-456-7890'
    };
    updateUserProfile(user);
    navigate('/user-profile');
  };

  const handleSignUp = async () => {
    const user = {
      name: formData.username,
      email: formData.email,
      address: '123 Main St',
      phone: '123-456-7890'
    };

    try {
      const response = await fetch('/api/send-to-google-sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        updateUserProfile(user);
        navigate('/user-profile');
      } else {
        console.error('Failed to send user data to Google Sheet');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex mt-8 justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {isSignUp ? (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="***********"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="*************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              </div>
            </>
          )}
        </form>
        <div className="text-center pb-20">
          <button
            className="text-blue-500 hover:text-blue-700 pb-8"
            onClick={toggleForm}
          >
            {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
