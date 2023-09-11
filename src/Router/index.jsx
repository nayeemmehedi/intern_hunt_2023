import React from "react";
import { Route, Routes } from "react-router-dom";
import { listRouter, privateListRouter } from "./RouterList";
import PrivateRoute from "./PrivateRouter";

function Router() {
  return (
    <div>
      <Routes>
        {listRouter?.map((route, idx) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={idx}
          ></Route>
        ))}
        {/* <Route path="*" element={} /> */}
      </Routes>
      <Routes>
        {privateListRouter?.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <PrivateRoute>
                <route.element />
              </PrivateRoute>
            }
            key={idx}
          ></Route>
        ))}
        {/* <Route path="*" element={<p>There's nothing here: 404!</p>} /> */}
      </Routes>
    </div>
  );
}

export default Router;
