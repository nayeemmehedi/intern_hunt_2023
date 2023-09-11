import React from "react";
import { Link } from "react-router-dom";
import { list } from "./popularList";

function PopularIntern() {
  return (
    <div className="m-lg-5 p-lg-5 m-md-0 m-sm-0 bg-dark">
      <h1 className="text-white m-lg-0 mb-md-5 m-sm-5">
        Popular Intern Job Circular
      </h1>

      <div class="row">
        {list?.map((value) => (
          <div class="col-lg-4 col-md-6  col-sm-12 ">
            <div class="card  m-lg-5 m-md-0 m-sm-0 p-lg-0 p-md-0 p-sm-3  text-white manualStyle">
              <h3 class="card-header">{value?.name}</h3>
              <div class="card-body" style={{ borderTop: "1px solid red" }}>
                <h5 class="card-title">{value?.approch}</h5>
                <ul>
                  {value?.program.map((v) => (
                    <li>{v}</li>
                  ))}
                </ul>

                <Link to="/home">
                  {" "}
                  <button className="btn btn-primary">Go Intern Page </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularIntern;
