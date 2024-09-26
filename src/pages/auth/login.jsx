import { useState } from "react";
import { Button } from "../../components/common/button";
import { LabelInput } from "../../components/common/label-input";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { requestMobileOtp, verifyMobileOtp } from "../../api/api";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    number: "8839248138",
    otp: "",
  });

  const [isRequestingOtp, setIsRequestingOtp] = useState(false);
  const [isCountdownCompleted, setIsCountdownCompleted] = useState(false);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otpOrderId, setOtpOrderId] = useState("");

  const navigate = useNavigate();

  const handleStateStatus = (
    requestingOtp,
    timerRunning,
    countdownCompleted
  ) => {
    if (requestingOtp !== null) {
      setIsRequestingOtp(requestingOtp);
    }
    if (requestingOtp !== null) {
      setIsTimerPlaying(timerRunning);
    }
    if (requestingOtp !== null) {
      setIsCountdownCompleted(countdownCompleted);
    }
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequestOtp = async () => {
    toast.dismiss();
    toast.loading("Requesting Otp");
    try {
      handleStateStatus(true, true, false);
      const phoneNumber = userDetails.number;
      const data = await requestMobileOtp(phoneNumber);

      toast.dismiss();
      if (data?.success) {
        setOtpOrderId(data?.orderId);
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOtpVerification = async () => {
    toast.dismiss();
    toast.loading("Requesting Otp");
    try {
      const data = await verifyMobileOtp(
        userDetails.number,
        otpOrderId,
        userDetails.otp
      );
      toast.dismiss();
      if (data?.success) {
        localStorage.setItem("token", data?.userId);
        localStorage.setItem("mobileNumber", userDetails.number);
        localStorage.setItem("dbName", userDetails.dbName);
        setIsOtpVerified(true);
        toast.success(data?.message);
        navigate("/select-company");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
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
        <div className="mt-3">
          <div>
            <LabelInput
              label={"Phone Number"}
              type={"number"}
              name={"number"}
              placeholder={"+91 9999999999"}
              inputHandler={handleUserInput}
              lengthLimit={10}
              value={userDetails.number}
              readonly={otpOrderId.length}
            />
            {userDetails?.number.length === 10 &&
              !isRequestingOtp &&
              !isOtpVerified && (
                <p
                  onClick={handleRequestOtp}
                  className="text-center mt-3 font-semibold cursor-pointer"
                >
                  Request OTP
                </p>
              )}

            {/* Timer and Resend OTP */}
            {isRequestingOtp && !isCountdownCompleted && (
              <div className="text-black mt-4 mb-2 text-center grid place-items-center">
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
              <div className="text-center my-3">
                <p className="font-semibold cursor-pointer">Resend OTP</p>
              </div>
            )}
          </div>

          {/* OTP Input */}
          {isRequestingOtp && (
            <LabelInput
              label={"One Time Password"}
              type={"number"}
              name={"otp"}
              inputHandler={handleUserInput}
              lengthLimit={4}
              value={userDetails.otp}
            />
          )}
        </div>

        {/* Continue Button */}
        <div className="mt-4">
          <button
            onClick={() =>
              userDetails.otp.length == 4
                ? handleOtpVerification()
                : toast.error("Enter otp")
            }
            className="bg-primary w-full text-white rounded-xl p-3 font-semibold"
          >
            Continue
          </button>
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
