import React, { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:8000/auth/google/login");
      const data = await res.json();
      window.location.href = data.auth_url;
    } catch (error) {
      console.error("Login failed:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md transform transition-all duration-500 hover:shadow-3xl animate-slideUp">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className={`w-10 h-10 border-4 border-white rounded-full border-t-transparent ${isLoading ? 'animate-spin' : ''}`}></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to continue to your account</p>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full bg-white border-2 border-gray-200 rounded-xl px-6 py-4 font-semibold text-gray-800 
                     flex items-center justify-center gap-3 
                     transition-all duration-300 
                     hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1
                     active:translate-y-0 active:shadow-md
                     disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0
                     relative overflow-hidden group"
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          
          {isLoading ? (
            <>
              <div className="w-6 h-6 border-3 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
              <span className="relative z-10">Connecting...</span>
            </>
          ) : (
            <>
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-360" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="relative z-10">Continue with Google</span>
            </>
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-sm text-gray-500">Secure Sign In</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-600 text-center leading-relaxed">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        .group:hover .group-hover\\:rotate-360 {
          transform: rotate(360deg);
        }
      `}</style>
    </div>
  );
};

export default Login;