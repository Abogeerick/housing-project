import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from 'react-oauth-google';
import Footer from './Footer';

const Login = () => {
  // Function to handle login success
  const handleLoginSuccess = (response) => {
    console.log('Login Successful:', response);
    // Implement your login logic here
    // For example, set the user data in state or localStorage
  };

  // Function to handle login failure
  const handleLoginFailure = (response) => {
    console.error('Login Failed:', response);
    // Handle login failure (show error message, etc.)
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <section className="flex h-screen bg-gray-100">
      <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: 'url("https://www.maramani.com/cdn/shop/products/6BedroomHousePlan-ID26401-Perspective_1_724x482.progressive.jpg?v=1664179577")' }}>
      </div>

      <div className="flex w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl lg:w-1/2">
        <div className="w-full p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700">Maramani</h2>

          <p className="text-xl text-center text-gray-600">Welcome back!</p>

          {/* Google Sign-In Button */}
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign in with Google"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg hover:bg-gray-50 p-2"
          />

          <div className="mt-4 flex items-center justify-between">
            <span className="w-1/5 border-b lg:w-1/4"></span>

            <a href="#" className="text-xs text-center text-gray-500 uppercase hover:underline">or login with email</a>

            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Email Address</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              type="email"
              placeholder="Enter email address"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
              <a href="#" className="text-xs text-gray-500 hover:underline">Forgot Password?</a>
            </div>

            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div className="mt-8">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a href="#" className="text-xs text-center text-gray-500 uppercase hover:underline">or sign up</a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </GoogleOAuthProvider>
  );
};

export default Login;
