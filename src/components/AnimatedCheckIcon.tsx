import { motion } from "framer-motion";
interface animatedCheckiconProps {
  isVisible: boolean;
}
export default function AnimatedCheckIcon(props: animatedCheckiconProps) {
  return (
    props.isVisible && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{ width: "24px", height: "24px", color: "white" }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    )
  );
}
