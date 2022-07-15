import React, { useState, useEffect } from "react";
import { Router, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Style.css";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useForm } from "react-hook-form";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const navigate = useNavigate();
  const [status, setStatus] = useState("flase");
  const [UserName, savedUserName] = useState();
  const [Password, savedPassword] = useState();

  const getdetails = async (details) => {
    console.log(details);
    const get = await axios
      .post("http://localhost:4000/api/users/user-signin", details)
      .then((Response) => {
        const setdata = Response.data.data.LoginStatus;
        console.log(Response.data.data);
        alert("successfully loggedIn");
        setStatus(setdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container my-5 ">
      <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4 border">
        <h2 className="text-center">Signin</h2>
        <p>
          Already have an account? or
          <a href="" onClick={() => navigate("/signup")}>
            SignUp
          </a>
        </p>

        <form onSubmit={handleSubmit(getdetails)}>
          <div className="mb-3 mt-3">
            <label htmlFor="UserName" className="form-label">
              UserName:
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              placeholder="UserName"
              name="UserName"
              onChange={(e) => savedUserName(e.target.value)}
              {...register("UserName", {
                required: "UserName is Required",
                pattern: {
                  value: /^[a-zA-Z0-9#?!@$%^&*-]*$/,
                  message: "UserName can be as per your wish",
                },
                minLength: {
                  value: 3,
                  message: "UserName should have atleast 3 character",
                },
                maxLength: {
                  value: 20,
                  message: "maximum 20 characters are only allowed",
                },
              })}
              onKeyUp={() => {
                trigger("UserName");
              }}
            />
            {errors.UserName && (
              <small className="text-danger">{errors.UserName.message}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password:
            </label>
            <input
              type="Password"
              className="form-control"
              placeholder="Enter Password"
              name="Password"
              onChange={(e) => savedPassword(e.target.value)}
              {...register("Password", {
                required: "Password is Required",
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "Password must have 8 characters and should include: At least one upper case  / At least one lower case  / At least one Number / At least one special character",
                },
              })}
              onKeyUp={() => {
                trigger("Password");
              }}
            />
          </div>
          {errors.Password && (
            <small className="text-danger">{errors.Password.message}</small>
          )}
          <p>
            By signing in you are agree to our &nbsp;
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-outline-success w-100 btnstyle"
            >
              Signin
            </button>
            <div className="social-Signin"></div>
            <Link to="/forgot-Password">
              <p className="mb-3 mt-3">Forgot Password ?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
