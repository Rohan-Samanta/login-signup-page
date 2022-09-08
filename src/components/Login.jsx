import React, { useEffect, useState } from "react";
import { ReactComponent as YourSvg } from "../assets/welcome.svg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [toggleSignup, setToggleSignup] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const notify = () => toast("Congratulation Signup Successful");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggleBtn(false);
    const inputValue = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    setUserData([...userData, inputValue]);
    axios
      .post(
        "https://630a2e843249910032820119.mockapi.io/signupData",
        inputValue
      )
      .then((res) => {
        console.log(res.status);
        notify();
        setToggleBtn(true);
        setToggleSignup(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setToggleBtn(false);
    const loginData = {
      email: loginEmail,
      password: loginPassword,
    };
  };
  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  return (
    <div className="vh-100 bg-info d-flex justify-content-center align-items-center">
      <div className="bg-dark d-flex  rounded">
        <YourSvg width="417.156px" className="p-2" height="420.719px" />

        <div className=" card p-5 bg-secondary d-flex justify-content-center align-items-center flex-column">
          <ToastContainer />
          {toggleSignup ? (
            <form onSubmit={handleSubmit}>
              <h1>Signup Here</h1>
              <br />
              <label className="m-2  form-control d-flex align-items-center">
                <FaUserAlt />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  style={{
                    backgroundColor: "transparent",
                    border: "0px solid",
                    color: "#CCC",
                    width: "100%",
                    outline: "none",
                  }}
                  className="text-dark mx-2"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
              <label className="m-2  form-control d-flex align-items-center">
                <MdEmail />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  style={{
                    backgroundColor: "transparent",
                    border: "0px solid",
                    width: "100%",
                    color: "#CCC",
                    outline: "none",
                  }}
                  className="text-dark mx-2"
                  required
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </label>
              <label className="m-2  form-control d-flex align-items-center">
                <RiLockPasswordFill />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  style={{
                    backgroundColor: "transparent",
                    border: "0px solid",
                    color: "#CCC",
                    width: "100%",
                    outline: "none",
                  }}
                  className="text-dark mx-2"
                  required
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </label>
              <div className="d-flex ">
                <input
                  type="checkbox"
                  name=""
                  id="termCondition"
                  className="mx-2"
                  required
                />
                <label htmlFor="termCondition">
                  I agree to Stroke Terms and Privacy Policy
                </label>
              </div>
              {toggleBtn ? (
                <button className="btn btn-outline-light text-dark my-4 rounded-pill">
                  Get Started Now
                </button>
              ) : (
                <button
                  className="btn btn-outline-light text-light my-4 rounded-pill"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only mx-3">Loading...</span>
                </button>
              )}

              <p
                className="text-light"
                style={{ cursor: "pointer" }}
                onClick={() => setToggleSignup(false)}
              >
                Existing User? Login
              </p>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit}>
              <h1>Login Here</h1>
              <br />

              <label className="m-2 my-4 form-control d-flex align-items-center">
                <MdEmail />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  style={{
                    backgroundColor: "transparent",
                    border: "0px solid",
                    width: "100%",
                    color: "#CCC",
                    outline: "none",
                  }}
                  className="text-dark mx-2"
                  required
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </label>
              <label className="m-2   form-control d-flex align-items-center">
                <RiLockPasswordFill />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  style={{
                    backgroundColor: "transparent",
                    border: "0px solid",
                    color: "#CCC",
                    width: "100%",
                    outline: "none",
                  }}
                  className="text-dark mx-2"
                  required
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </label>
              <div className="d-flex ">
                <input
                  type="checkbox"
                  name=""
                  id="termCondition"
                  className="mx-2"
                  required
                />
                <label htmlFor="termCondition">
                  I agree to Stroke Terms and Privacy Policy
                </label>
              </div>
              <button className="btn btn-outline-light text-dark bg-  my-4 rounded-pill">
                Login To Continue
              </button>
              <p
                className="text-light"
                style={{ cursor: "pointer" }}
                onClick={() => setToggleSignup(true)}
              >
                New User? Signup
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
