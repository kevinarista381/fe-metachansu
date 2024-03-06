import { useEffect, useState } from "react";

let getScreenSize = () => {
  let { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

let useGetScreenSize = () => {
  const [screenSize, setscreenSize] = useState(getScreenSize());

  useEffect(() => {
    let handleResize = () => setscreenSize(getScreenSize);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export const useGetIsMobile = () => useGetScreenSize().width <= 720;
export const useGetIsTablet = () => {
  let width = useGetScreenSize().width;
  return width <= 1000 && width > 720;
};
