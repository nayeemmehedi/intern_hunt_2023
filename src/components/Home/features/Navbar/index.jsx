import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
// import fakedata from '../Fakedata/Fakedata.json'
// import fakegmail from "../Fakedata/emailfake.json"

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      {/* <button onClick={addallevent}>add all gmail</button> */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <div style={{ height: "70px" }}>
              <p
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  paddingLeft: "30px",
                }}
              >
                {" "}
                <span style={{ color: "#348ceb" }}>
                  <FontAwesomeIcon icon={faFeatherAlt} />
                  INTERN{" "}
                </span>{" "}
                HUNT
              </p>
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-lg-auto mb-lg-2 mb-lg-0">
              <li class="nav-item me-3">
                <Link class="nav-link active" aria-current="page" to="./">
                  Home
                </Link>
              </li>

              <li class="nav-item me-3">
                <Link class="nav-link active" aria-current="page" to="./home">
                  Intern
                </Link>
              </li>

              <li class="nav-item me-3">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="./carduser"
                >
                  Card
                </Link>
              </li>

              <li class="nav-item me-3">
                <Link class="nav-link active" aria-current="page" to="./review">
                  review
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link class="nav-link active" aria-current="page" to="./hire">
                  Hire you
                </Link>
              </li>

              <li class="nav-item ">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="./company/nayeem"
                >
                  <button class="btn btn-primary">Company</button>
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link active" aria-current="page" href="./admin">
                  <button class="btn btn-info">Admin</button>
                </a>
              </li>

              {false ? (
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href
                  >
                    Nayeem
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href onClick={logout}>
                        Logged Out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href
                  >
                    Student
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href
                        onClick={() => navigate("/login")}
                      >
                        Log in
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
