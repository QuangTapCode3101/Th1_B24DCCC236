import React, { useState, useEffect } from "react";

function TrafficLight() {
  const [light, setLight] = useState("red");

  const changeLight = () => {
    if (light === "red") setLight("green");
    else if (light === "green") setLight("yellow");
    else setLight("red");
  };

  useEffect(() => {
    const timer = setInterval(changeLight, 2000);
    return () => clearInterval(timer);
  }, [light]);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bài 2: Đèn giao thông</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: light === "red" ? "red" : "gray",
          }}
        />
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: light === "yellow" ? "yellow" : "gray",
          }}
        />
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: light === "green" ? "green" : "gray",
          }}
        />
      </div>
      <button onClick={changeLight}>Chuyển đèn</button>
    </div>
  );
}

export default TrafficLight;
