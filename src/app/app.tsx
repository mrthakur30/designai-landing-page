import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { API, DASHBOARD_URL } from "../api";
import Header from "components/Header";
import Footer from "components/Footer";

const App = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    phoneNumber: "",
    email: "",
    fname: "",
    lname: "",
    phoneVerified: false,
    city: "",
    pincode: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSendOtp = async () => {
    if (!phone) {
      setError("Please provide a phone number.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API}/phone/request-otp/nc`, {
        phone,
        countryCode: "+91",
      });
      if (response.status === 200) {
        setIsOtpSent(true);
        setError("");
        toast.success("OTP sent successfully!");
      }
    } catch (error) {
      toast.error("Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API}/phone/verify-otp`, {
        phone,
        otp,
      });
      if (response.status === 200) {
        await checkCustomerStatus();
        setError("");
        toast.success("OTP verified!");
      } else {
        setError("Invalid OTP.");
      }
    } catch (error) {
      toast.error("Failed to verify OTP.");
    } finally {
      setLoading(false);
    }
  };

  const checkCustomerStatus = async () => {
    try {
      const response = await axios.get(`${API}/custTable/check`, {
        params: { phone, countryCode: "+91" },
      });
      if (response.status === 200) {
        setIsNewUser(true);
        toast("New user detected. Please register.");
      }
    } catch (error) {
      await loginExistingCustomer();
      toast("User Already Exists");
    }
  };

  const loginExistingCustomer = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/custTable/by/phone`, {
        params: { phone, countryCode: "+91" },
      });

      const data = response.data.data;

      window.location.href = `${DASHBOARD_URL}/redirect?To=${'design-ai'}&Id=${data.Id}&Token=${data.Token}&Session=${data.Session}&Name=${data.Name}&Email=${data.Email}&Currency=${data.Currency}&Phone=${data.Phone}&PCode=${data.PCode}&RecId=${data.RecId}`;

      toast.success("Logged in successfully!");
    } catch (error) {
      toast.error("Failed to log in.");
    } finally {
      setLoading(false);
    }
  };

  const registerNewCustomer = async () => {
    if (!termsAccepted) {
      setError("You must accept the Terms and Conditions.");
      return;
    }
    setLoading(true);
    const apiData = {
      Name: `${user.fname} ${user.lname}`,
      Phone: phone,
      PCode: "+91",
      City: user.city,
      ZipCode: user.pincode,
      Email: user.email,
    };
    try {
      const response = await axios.post(`${API}/custTable/signup`, apiData);

      const data = response.data.data;

      if (response.status === 200) {
        const userToSend = {
          fname: user.fname,
          lname: user.lname,
          email: user.email,
          phoneVerified: user.phoneVerified,
          phoneNumber: user.phoneNumber,
          pCode: "+91",
          city: user.city,
          pincode: user.pincode,
        };

        await fetch("https://www.designelementary.com/api/user/india/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userToSend),
        }).then(() => {
          window.location.href = `${DASHBOARD_URL}/redirect?To=${'design-ai'}&Id=${data.Id}&Token=${data.Token}&Session=${data.Session}&Name=${data.Name}&Email=${data.Email}&Currency=${data.Currency}&Phone=${data.Phone}&PCode=${data.PCode}&RecId=${data.RecId}`;
          toast.success("Registered successfully!");
        }).catch((error) => error.response.json());
      }
    } catch (error) {
      toast.error("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url(/interior.png)" }}>
        <Toaster position="top-center" reverseOrder={false} />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="loader border-t-4 border-green-500 rounded-full w-16 h-16"></div>
          </div>
        )}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-12 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white">DesignAI</h1>
          <p className="mt-4 text-lg md:text-2xl text-white mb-10">Design your interior with AI. Get free credits by signing up here.</p>
        </div>
        <div className="w-full md:w-1/3 bg-white bg-opacity-90 p-8 rounded-lg shadow-md" style={{ backgroundImage: "url(/image.jpg)" }}>
          <div className="">
            <h1 className="mb-5 text-slate-100 text-center text-4xl top-1/3 font-semibold w-full">Design Now</h1>
          </div>
          {!isOtpSent ? (
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input input-bordered w-full mb-4 p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <button
                onClick={handleSendOtp}
                className="btn btn-primary w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white focus:outline-none"
              >
                Send OTP
              </button>
            </div>
          ) : isNewUser ? (
            // Sign-up form for new users
            <div>
              <h2 className="text-xl font-semibold mb-4 text-slate-800">Register</h2>
              <input
                type="text"
                placeholder="First Name"
                value={user.fname}
                onChange={(e) => handleInputChange("fname", e.target.value)}
                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={user.lname}
                onChange={(e) => handleInputChange("lname", e.target.value)}
                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="City"
                value={user.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Pincode"
                value={user.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-slate-600">
                  I accept the <a href="/terms" className="text-blue-500">Terms and Conditions</a>
                </label>
              </div>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <button
                onClick={registerNewCustomer}
                className="btn btn-primary w-full py-4 text-white rounded-lg bg-green-500 hover:bg-green-600 focus:outline-none"
              >
                Register
              </button>
            </div>
          ) : (
            // OTP verification form
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <button
                onClick={handleVerifyOtp}
                className="btn btn-primary w-full py-4 text-white rounded-lg bg-green-500 hover:bg-green-600 focus:outline-none"
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
