import React, { useEffect } from "react";
const HomePage = (props: any) => {

  useEffect(() => {
    window.location.href = "/task/1"
  });

  return (
    <div className="homepage">
      <h1>hello, this is home page</h1>
    </div>
  );
}

export default HomePage;