import React from "react";
import LoginFeatures from "../../features/loginFeatures";
import { Link } from "react-router-dom";

function LoginCmp() {
  return (
    <div className="">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <LoginFeatures></LoginFeatures>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="bg-dark text-white mt-5 p-4">
            <div>
              <p className="d-flex justify-content-end p-lg-5">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span> Sign Up</span>{" "}
                </Link>
              </p>
            </div>
            <div className="container">
              {/* onSubmit={handleSubmit}  */}
              <form>
                <h3>Get started free....</h3>
                <p>No credit card required</p>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    // onBlur={handleBlur}
                    name="email"
                    className="form-control w-75"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    // onBlur={handleBlur}
                    name="password"
                    className="form-control w-75"
                    id="exampleInputPassword1"
                  />
                  <span>password must be greater then 6</span>
                </div>

                <div className="row">
                  <div className="col-6">   <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                /></div>

                <div className="col-6">
                  <Link to="/forget_password">Forget Password?</Link>

                </div>

                </div>

              

                {/* {user.error ? (
                <h3 style={{ color: "red" }}>{user.error}</h3>
              ) : (
                <p></p>
              )} */}
              </form>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCmp;
