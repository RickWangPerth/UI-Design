import React, { useState, useEffect } from "react";

interface StyleState {
  rotateX: number;
  rotateY: number;
}

const TiltCard: React.FC = () => {
  const [styles, setStyles] = useState<StyleState>({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 30;
      const offsetY = ((y - middleY) / middleY) * 30;

      setStyles({ rotateX: offsetY, rotateY: -offsetX });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          transform: `translate(-50%, -50%) rotateX(${styles.rotateX}deg) rotateY(${styles.rotateY}deg)`,
          transition: "transform 0.2s",
          width: "500px",
          height: "400px",
          background:
            "linear-gradient(135deg, rgba(255,0,0,0.6), rgba(0,0,255,0.6))",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          position: "absolute",
          top: "50%",
          left: "50%",
          borderRadius: "30px",
          transformStyle: "preserve-3d",
          transformOrigin: "center",
        }}
      />
      <div
        style={{
          transform: `translate(-50%, -50%) rotateX(${styles.rotateX}deg) rotateY(${styles.rotateY}deg) translateZ(-50px)`,
          transition: "transform 0.2s",
          width: "400px",
          height: "300px",
          background: "rgba(0,0,0)",
          boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
          position: "absolute",
          top: "50%",
          left: "50%",
          borderRadius: "30px",
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
          flexDirection: "column", 
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            padding: "20px",
            margin: 0,
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
          }}
        >
          Tilt Card
        </h1>
      </div>
    </div>
  );
};

export default TiltCard;
