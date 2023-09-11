import React from "react";
// import { useGetPostsQuery } from "./redux/mianProcess/Slice";
import Router from "./Router";
import { useGetPostsQuery } from "./redux/login/LoginAuth";

function App() {
  // const {isError,isLoading,isSuccess,data} = useGetPostsQuery();

  return (
    <div>
      <Router></Router>
    </div>
  );
}

export default App;
