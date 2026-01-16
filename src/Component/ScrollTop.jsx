import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  // Access the current URL path
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the path changes (e.g., from /gallery to /contact),
    // scroll the window to the very top immediately
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything UI-wise
  return null;
};

export default ScrollTop;