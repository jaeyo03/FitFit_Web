import React from 'react';
import './styles.css'; 
export default function Sign_In() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Sign in</h2>
            <p className="text-gray-600 dark:text-gray-400">Enter your username and password to access your account.</p>
          </div>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                id="username"
                placeholder="Enter your username"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                  id="remember"
                  type="checkbox"
                />
                <label className="block ml-2 text-sm text-gray-900 dark:text-gray-300" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <a
                className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <button
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    )
  }