const FrontendBubbleSvg = () => (
  <svg
    width="300"
    height="200"
    viewBox="0 0 300 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
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
