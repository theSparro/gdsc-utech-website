// Forces the page to scroll to the top when the route changes
// instead of keeping the same scroll position on the new page
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    //window.moveTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;