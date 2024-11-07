const FrontendBubbleSvg = () => (
  <svg
    viewBox="0 0 300 200" // Behåll viewBox för skalan
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "auto", // Gör höjden automatisk för att bevara proportionerna
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
      fill="#F7F7F7"
    />
  </svg>
);

export default FrontendBubbleSvg;
