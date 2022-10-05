import React, { useState } from "react";
import { useFormik } from "formik";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import google from "../asstes/google.png";
// import insta from "../asstes/insta.svg";
// import twitter from "../asstes/twitter.svg";
// import linkedin from "../asstes/linkedin.svg";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "./Signup.scss";
export default function SignUp() {
  const [loading, setLoading] = useState(false);

  /*  ======================================== Google auth ====================================================== */
  const clientId =
    "583371354557-oj2mn29eih6004btma89tba8f50s52k7.apps.googleusercontent.com";

  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("sign up success:", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const onFailureSuccess = (res) => {
    console.log("sign up failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("you have been signed out successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

  /* ============================ Google auth render button ========================================*/

  function googlebutton(renderProps) {
    return (
      <div className="login-options"> 
        <div
          className="h-full flex items-center shadow-6xl text-blue-900 font-semibold "
          onClick={() => renderProps.onClick()}
        >
          <FcGoogle style={{color: 'red', fontSize: '50px', cursor: "pointer"}}/> 
        </div>
        <div
          className="h-full flex items-center shadow-6xl text-blue-900 font-semibold "
          onClick={() => renderProps.onClick()}
        >
          <FaInstagramSquare style={{color: '#002E6D', fontSize: '50px', cursor: "pointer"}}/> 
        </div>
        <div
          className="h-full flex items-center shadow-6xl text-blue-900 font-semibold "
          onClick={() => renderProps.onClick()}
        >
          <FaTwitter style={{color: '#002E6D', fontSize: '50px', cursor: "pointer"}}/> 
        </div>
        <div
          className="h-full flex items-center shadow-6xl text-blue-900 font-semibold "
          onClick={() => renderProps.onClick()}
        >
          <FaLinkedin style={{color: '#002E6D', fontSize: '50px', cursor: "pointer"}} /> 
        </div>
      </div>
    );
  }

  function googleskeletonbutton(renderProps) {
    return (
      <button
        className="h-full flex items-center shadow-6xl text-blue-900 font-semibold text-text"
        onClick={() => renderProps.onClick()}
      >
        <div className="w-7 h-7 rounded-full bg-gray-200 mr-2 ">
          <img src={FcGoogle} hidden alt="" />
        </div>
        <div className="bg-gray-200 rounded-lg text-gray-200">
          Sign up with google
        </div>
      </button>
    );
  }

  /*================================================  Validation ==========================================*/

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
        name: Yup.string("Full name").required("Name is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      password: Yup.string("confirm password").required("Password is required"),
    }),


    /* ======================================Submti function ============================*/
    onSubmit: (values) => {
      setLoading(true);
      toast.info("Sign up successfully");

      setTimeout(() => {
        setLoading(false);
      }, 5000);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <>
        <ToastContainer />
      </>

      {!loading && (
        <div className="sign-up flex flex-col justify-center items-center  md:w-1/3   ">
          <h1>Sign Up</h1>

          {/* ============================= google login ======================================= */}

          <div className="google-login">
            {showLoginButton ? (
              <GoogleLogin
                clientId={clientId}
                render={googlebutton}
                onSuccess={onLoginSuccess}
                onFailure={onFailureSuccess}
                cookiePolicy={"single_host_origin"}
              />
            ) : null}

            {showLogoutButton ? (
              <GoogleLogout
                clientId={clientId}
                buttonText=""
                onLogoutSuccess={onSignoutSuccess}
              ></GoogleLogout>
            ) : null}
          </div>

          <div className="separator flex mt-5 ">
            <div className=" mt-2 grid grid-cols-1 w-1/5 mr-10 divide-y-2 divide-blue-900">
              {/* <p></p> */}
              <hr className=" " />
            </div>
            <p className="text-red-500 font-bold">or</p>

            <div className="mt-2 grid grid-cols-1 w-1/5 ml-10 divide-y-2 divide-blue-900">
              {/* <p></p> */}
              <hr className=" " />
            </div>
          </div>

          {/* ============================= form ================================================ */}

          <form
            className="w-full md:w-3/5"
            action=""
            onSubmit={formik.handleSubmit}
          >
            <div className="test relative w-full flex flex-col ">
              <label className="text-blue-900  font-medium" htmlFor="email">
                Name
              </label>

              <input
                className=" "
                id="name"
                type="text"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div className=" formik-error absolute top-6 left-0 text-red-600 text-sm">
                {formik.touched.name && formik.errors.name}
              </div>
            </div>
            <div className="test relative w-full flex flex-col ">
              <label className="text-blue-900  font-medium" htmlFor="email">
                Email
              </label>

              <input
                className=" "
                id="email"
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className=" formik-error absolute top-6 left-0 text-red-600 text-sm">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>

            <div className="test relative w-full flex flex-col pt-3">
              <label className="text-blue-900 font-medium" htmlFor="email ">
                Password
              </label>
              <input
                className=" "
                id="password"
                type="password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              
              <div className=" formik-error absolute top-6 left-0 text-red-600 text-sm">
                {formik.touched.password && formik.errors.password}
              </div>

              
            </div>

            <button className="signin-btn" type="submit">
              Sign in
            </button>
          </form>

          <p className=" no-account ">
            already have an account?{" "}
            <a href="/login"><span className="text-red-500 font-bold">Sign up</span></a>
          </p>
        </div>
      )}

      {/*================================================== Skeleton ======================================================*/}

      {loading && (
        <div className="flex flex-row justify-evenly h-screen bg-gray-100 animate-pulse  rounded-lg w-screen">
          <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3  ">
            <h1 className="text-gray-200 bg-gray-300 animate-pulse  rounded-lg font-bold h-6 w-5/6"></h1>

            <div className="h-9 mt-7 flex flex-row w-full justify-evenly items-center md:w-3/5 ">
              {showLoginButton ? (
                <GoogleLogin
                  clientId={clientId}
                  render={googleskeletonbutton}
                  onSuccess={onLoginSuccess}
                  onFailure={onFailureSuccess}
                  cookiePolicy={"single_host_origin"}
                />
              ) : null}

              {showLogoutButton ? (
                <GoogleLogout
                  clientId={clientId}
                  buttonText=""
                  onLogoutSuccess={onSignoutSuccess}
                ></GoogleLogout>
              ) : null}
            </div>

            <div className="flex mt-5 ">
              <div className=" mt-2 grid grid-cols-1 w-1/2 divide-y divide-yellow-500">
                <p></p>
                <hr className="white" />
              </div>
              <p className="text-gray-300 bg-gray-300 animate-pulse  w-10 font-bold">
                or
              </p>

              <div className=" mt-2 grid grid-cols-1 w-1/2 divide-y divide-yellow-500">
                <p></p>
                <hr className="white" />
              </div>
            </div>

            <form
              className="w-full md:w-3/5"
              action=""
              onSubmit={formik.handleSubmit}
            >
                <div className="test relative w-full flex flex-col ">
                <label
                  className="text-gray-300 bg-gray-300 animate-pulse  rounded-lg mt-2 h-2 w-1/3 font-medium"
                  htmlFor="name"
                ></label>

                <input
                  className=" animate-pulse flex space-x-4 h-4 bg-gray-300 text-gray-300 rounded-lg mt-2 font-medium "
                  id="name"
                  type="text"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <div className=" absolute top-6 left-0 text-red-600">
                  {formik.touched.name && formik.errors.name}
                </div>
              </div>
              <div className="test relative w-full flex flex-col ">
                <label
                  className="text-gray-300 bg-gray-300 animate-pulse  rounded-lg mt-2 h-2 w-1/3 font-medium"
                  htmlFor="email"
                ></label>

                <input
                  className=" animate-pulse flex space-x-4 h-4 bg-gray-300 text-gray-300 rounded-lg mt-2 font-medium "
                  id="email"
                  type="email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className=" absolute top-6 left-0 text-red-600">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>

              <div className=" test relative w-full flex flex-col">
                <label
                  className="text-gray-300 bg-gray-300 animate-pulse  rounded-lg mt-2 h-2 w-1/3 font-medium"
                  htmlFor="password"
                ></label>
                <input
                  className="text-gray-300 bg-gray-300 animate-pulse h-4  rounded-lg mt-2 font-medium"
                  id="password"
                  type="password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <div className=" text-red-600">
                  {formik.touched.password && formik.errors.password}
                </div>
              </div>

              <button
                className="bg-gray-300 animate-pulse  rounded-lg h-4 font-bold w-full mt-7 h-9"
                type="submit"
              ></button>
            </form>

            <p className="w-full mt-3 rounded-lg md:w-3/5 bg-gray-300 animate-pulse h-5 ">
              {" "}
              <span className=" bg-gray-300 animate-pulse  h-5 font-bold"></span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
