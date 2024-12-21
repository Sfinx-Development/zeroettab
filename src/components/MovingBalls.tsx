import React from "react";
// import "./App.css";

const MovingBalls: React.FC = () => {
  const balls = Array.from({ length: 5 });

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#1a1a1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {balls.map((_, index) => (
        <div
          key={index}
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#f9c2d1",
            borderRadius: "50%",
            position: "absolute",
            animation: `move 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite`,
            animationDelay: `${index * 0.15}s`,
          }}
        ></div>
      ))}

      <style>{`
        @keyframes move {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0.5;
          }
          25% {
            transform: translateX(50px) translateY(-50px);
            opacity: 1;
          }
          50% {
            transform: translateX(100px) translateY(0);
            opacity: 0.5;
          }
          75% {
            transform: translateX(150px) translateY(50px);
            opacity: 1;
          }
          100% {
            transform: translateX(200px) translateY(0);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default MovingBalls;
