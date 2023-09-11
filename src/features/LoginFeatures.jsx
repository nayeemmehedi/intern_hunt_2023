import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./register.json"; // Import the JSON file

const LoginFeatures = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // Required
      renderer: "svg", // Required
      loop: true, // Optional
      autoplay: true, // Optional
      animationData: animationData, // Use the imported JSON data
    });
  }, []);

  return (
    <div>
      <br /> <br />
      <div
        style={{ maxHeight: "550px" }}
        className="container"
        ref={container}
      ></div>
    </div>
  );
};

export default LoginFeatures;
