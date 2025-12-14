import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Common.css'; // Importing common.css for styling
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!email) {
      setError('Please enter your email');
      return;
    }
    // Encrypt email (using base64 for simplicity; use proper encryption in production)
    const encryptedEmail = btoa(email);
    // Navigate to webinar dashboard with encrypted email in URL
    navigate(`/Webinar-dashboard?email=${encryptedEmail}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10rem] left-[-10rem] w-126 h-126 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-[-10rem] right-[-10rem] w-126 h-126 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10rem] left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-8">
        <div >
          <div className="text-center mb-8 mt-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent ">
              LOGIN TO WEBINAR DASHBOARD
            </h1>
          </div>
          <br></br>
          <form onSubmit={handleLogin} className="form1-card ">
            <div>
              <label htmlFor="email" className="flex items-center gap-2 font-semibold text-purple-700 mt-10 mb-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-10 px-4 py-3 rounded-lg border-2 border-purple-200 bg-purple-50/50 font-medium text-gray-700 placeholder-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>



            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <br></br>
            <br></br>
            <div className="flex justify-center mt-16">
              <button
                type="submit"
                className="w-64 h-12 py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                LOGIN
              </button>
            </div>
          </form>


        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;