import React from "react";

export const Home = () => {
    const textstyle = {
        position: "relative",
        left: "40vh"
    }
  return (
    <>
    <div className="container text-center " style={{marginTop:"5vh"}}>
        <input type="text" className="input-group w-50 "  style={textstyle} />
    </div>
    <div className="container my-3 border">

    </div>
    </>
  );
};
