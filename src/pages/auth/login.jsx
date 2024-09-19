import { useState, useEffect } from "react";
import { Button } from "../../components/common/button";
import { LabelInput } from "../../components/common/label-input";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    number: "9516949156",
    otp: "",
  });

  const [isRequestingOtp, setIsRequestingOtp] = useState(false);
  const [isCountdownCompleted, setIsCountdownCompleted] = useState(false);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);

  const navigate = useNavigate();

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequestOtp = () => {
    toast.dismiss();
    toast.loading("Requesting Otp");
    setIsRequestingOtp(true);
    setIsTimerPlaying(true);
    setIsCountdownCompleted(false);
  };

  const handleResendOtp = () => {
    toast.dismiss();
    toast.loading("Resending Otp");
    setIsTimerPlaying(true);
    setIsCountdownCompleted(false);
  };

  const handleCountdownComplete = () => {
    setIsCountdownCompleted(true);
    setIsTimerPlaying(false);
  };

  return (
    <div className="bg-primary h-screen flex flex-col justify-between">
      <section className="grid place-items-center h-full">
        <h2 className="font-extrabold text-[7vh] text-secondary">SPEGI</h2>
      </section>
      <section className="min-h-[70%] rounded-t-[4vh] bg-secondary p-4 ">
        <div className="text-center">
          <label className="font-semibold text-[3vh]">Welcome Back</label>
          <p className="text-textSecondary mt-2">Enter your phone number</p>
        </div>
        <div>
          <div>
            <LabelInput
              label={"Phone Number"}
              type={"number"}
              name={"number"}
              placeholder={"+91 9999999999"}
              inputHandler={handleUserInput}
              lengthLimit={10}
              value={userDetails.number}
            />
            {userDetails?.number.length === 10 && !isRequestingOtp && (
              <p
                onClick={handleRequestOtp}
                className="text-center mt-3 font-semibold cursor-pointer"
              >
                Request OTP
              </p>
            )}

            {/* Timer and Resend OTP */}
            {isRequestingOtp && !isCountdownCompleted && (
              <div className="text-black mt-4 text-center grid place-items-center">
                <CountdownCircleTimer
                  isPlaying={isTimerPlaying}
                  duration={5}
                  colors={["#000000", "#000000", "#000000", "#000000"]}
                  colorsTime={[7, 5, 2, 0]}
                  size={40}
                  strokeWidth={4}
                  onComplete={handleCountdownComplete} // Stop the timer and allow resend
                  className="text-black"
                >
                  {({ remainingTime }) => (
                    <div className="text-black text-lg font-bold">
                      {remainingTime}
                    </div>
                  )}
                </CountdownCircleTimer>
              </div>
            )}

            {/* Show Resend OTP after countdown */}
            {isCountdownCompleted && (
              <div className="text-center mt-3">
                <p
                  onClick={handleResendOtp}
                  className="font-semibold cursor-pointer"
                >
                  Resend OTP
                </p>
              </div>
            )}
          </div>

          {/* OTP Input */}
          {isRequestingOtp && (
            <LabelInput
              label={"One Time Password"}
              type={"number"}
              name={"otp"}
              placeholder={"0 0 0 0 0 0"}
              inputHandler={handleUserInput}
              lengthLimit={6}
              value={userDetails.otp}
            />
          )}
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <Button
            clickHandler={() => navigate("/select-company")}
            label={"Continue"}
            // isClicked={isRequestingOtp}
          />
          <p
            onClick={() => navigate("/forgot-password")}
            className="text-center mt-4 text-blue-700"
          >
            Forgot password?
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
