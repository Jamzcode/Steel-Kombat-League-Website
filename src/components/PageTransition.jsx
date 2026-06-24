import { useEffect, useState } from "react";

export default function PageTransition({ children, direction = "right" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);
  return (
    <div
      style={{
        transform: visible
          ? "translateX(0)"
          : `translateX(${direction === "right" ? "100%" : "-100%"})`,
        opacity: visible ? 1 : 0,
        transition:
          "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
