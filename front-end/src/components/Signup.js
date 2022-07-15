import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const navigate = useNavigate();
  const [UserName, setUserName] = useState();
  const [EMail, setEMail] = useState();
  const [MobileNo, setMobileNo] = useState();
  const [Password, setPassword] = useState();

  const savedetails = (details) => {
    console.log(details);
    axios
      .post("http://localhost:4000/api/users/user-signup", details)
      .then((Response) => {
        console.log(Response.data.status);
        // if (Response.data.status === "failure") {
        //   alert(Response.data.message);
        // } else {
        //   alert("Registration is successfully completed");
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mb-3 mt-4 ">
      <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4 border">
        <h2 className="text-center ">Signup</h2>
        <p className="text-start mt-3">
          Please fill in this form to create an account. or
          <a href="" onClick={() => navigate("/login")}>
            Login
          </a>
        </p>
        <form onSubmit={handleSubmit(savedetails)}>
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">
              UserName:
            </label>
            <input
              type="text"
              className="form-control"
              name="UserName"
              placeholder="Enter UserName"
              onChange={(e) => setUserName(e.target.value)}
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
            <label htmlFor="EMail" className="form-label">
              EMail:
            </label>
            <input
              type="EMail"
              className="form-control"
              placeholder="Enter EMail"
              name="EMail"
              onChange={(e) => setEMail(e.target.value)}
              {...register("EMail", {
                required: "EMail is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message:
                    "enter valid EMail (example : samplEMail@example.com)",
                },
              })}
              onKeyUp={() => {
                trigger("EMail");
              }}
            />
            {errors.EMail && (
              <small className="text-danger">{errors.EMail.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="MobileNo" className="form-label">
              MobileNo:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter PhoneNumber"
              name="MobileNo"
              onChange={(e) => setMobileNo(e.target.value)}
              {...register("MobileNo", {
                required: "MobileNo is Required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "only numbers are allowed.Enter valid mobile number",
                },
                maxLength: {
                  value: 10,
                  message: "Not more than 10 numbers are allowed",
                },
              })}
              onKeyUp={() => {
                trigger("MobileNo");
              }}
            />
            {errors.MobileNo && (
              <small className="text-danger">{errors.MobileNo.message}</small>
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
              onChange={(e) => setPassword(e.target.value)}
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
            {errors.Password && (
              <small className="text-danger">{errors.Password.message}</small>
            )}
          </div>
          <p>
            By signing in you are agree to our &nbsp;
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <div className="text-center">
            <button
              type="submit"
              name="sign-up"
              className="btn btn-outline-success w-100"
              onClick={savedetails}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
