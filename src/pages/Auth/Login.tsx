// src/pages/auth/SignIn.tsx (or .jsx if you're not using TypeScript)


const Login = () => {
    return (
        <div className="relative">
          {/* Blurred background overlay */}
          {/* <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-0"></div> */}
    
          {/* Signup Form */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="bg-black text-white p-10 rounded-2xl shadow-lg w-full max-w-md">
              <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Username / Email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    };

export default Login;
