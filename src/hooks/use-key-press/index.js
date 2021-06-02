import { useEffect } from "react";

const useKeyPress = (fn) => {
  useEffect(() => {
    window.addEventListener("keydown", fn);
    return () => window.EventListener("keydown", fn);
  }, [])
}

export default useKeyPress;