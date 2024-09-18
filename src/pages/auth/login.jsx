import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4">
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">
                  Sign in
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Please enter your details to sign in.
                </p>
              </div>

              <div>
                <label className="font-semibold text-gray-800 text-sm mb-2 block">
                  Mobile Number
                </label>
                <div className="relative flex gap-2 items-center">
                  <input
                    name="mobileNumber"
                    type="tel"
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter your number"
                    maxLength={10} // Restrict input to 10 characters
                  />
                  <div
                    // className="cursor-pointer min-w-[35%] text-center text-nowrap font-medium text-sm text-white border border-gray-300 px-2 py-3 rounded-lg outline-blue-600 bg-[#1d4ed8]"
                    className="cursor-pointer min-w-[35%] text-center text-nowrap font-medium text-sm text-white border border-gray-300 px-2 py-3 rounded-lg outline-blue-600"
                  >
                    Request OTP
                  </div>
                </div>
              </div>

              <div>
                <label className="font-semibold text-gray-800 text-sm mb-2 block">
                  One Time Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="otp"
                    type="number"
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter OTP"
                  />
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="button"
                  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  onClick={() => navigate("/home")}
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
