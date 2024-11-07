const BackendBubbleSvg = () => (
  <svg
    viewBox="0 0 300 200" // Håller proportionerna för skalan
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "auto", // Automatisk höjd för att bevara proportionerna
      zIndex: -1,
      maxWidth: "500px", // Större maxbredd för större skärmar
    }}
  >
    <path
      d="M150 20
         C190 10, 250 40, 270 100
         C280 150, 240 180, 190 190
         C130 200, 60 180, 40 130
         C20 80, 80 30, 150 20"
      fill="rgba(254,232,209,255)"
    />
  </svg>
);

export default BackendBubbleSvg;
