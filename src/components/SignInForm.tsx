'use client';
import useAuthStore from '@/store/userAuthStore';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
const SignInForm = () => {
  const { isUserIdValid, setUserId, validateUserId, setPassword } = useAuthStore();
  const [tempUserId, setTempUserId] = useState('');

  const handleUserIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserId(tempUserId);
    validateUserId();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96">
        <p className='text-center px-5 m-5 underline hover:text-blue-500'>VSF Corporation Pvt Limited.</p>
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        
        <form onSubmit={handleUserIdSubmit} className="space-y-4">
          <div>
            <label htmlFor="userId" className="block text-sm font-medium mb-1">User ID:</label>
            <div className="relative">
              <input
                type="text"
                id="userId"
                value={tempUserId}
                onChange={(e) => setTempUserId(e.target.value)}
                disabled={isUserIdValid}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Arrow button */}
              {!isUserIdValid && (
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full text-white"
                >
                  <FiArrowRight size={20} />
                </button>
              )}
            </div>
          </div>
        </form>

        {isUserIdValid && (
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password:</label>
            <input
              type="password"
              id="password"
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
        )}
        {/* Forgot Password */}
        <div className="text-right mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
        </div>
        {/* Footer Image */}
          <div className='flex justify-center'>
          <img src="/Powered_By.png" alt="Powered By" className="inline-block h-20" /> 
        </div>


      </div>
    </div>
  );
};

export default SignInForm;