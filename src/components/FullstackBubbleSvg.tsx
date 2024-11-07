const FullstackBubbleSvg = () => (
  <svg
    viewBox="0 0 300 200" // Behåll proportionerna för skalan
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "auto", // Automatisk höjd för att bevara proportionerna
      zIndex: -1,
      maxWidth: "600px", // Större maxbredd för större skärmar
    }}
  >
    <defs>
      <linearGradient id="fullstackGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(240,231,226,1)" />
        <stop offset="100%" stopColor="rgba(229,186,179,1)" />
      </linearGradient>
    </defs>
    <path
      d="M150 20
           C190 10, 250 40, 270 100
           C280 150, 240 180, 190 190
           C130 200, 60 180, 40 130
           C20 80, 80 30, 150 20"
      fill="url(#fullstackGradient)" // Refererar till gradienten definierad i <defs>
    />
  </svg>
);

export default FullstackBubbleSvg;
