import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const transformData = (data) => {
  const loadedPrebuilt = [];
  for (const key in data) {
    loadedPrebuilt.push({
      id: key,
      name: data[key].name,
      img: data[key].img,
      cpu: data[key].cpu,
      gpu: data[key].gpu,
      price: data[key].price,
    });
  }
  return loadedPrebuilt;
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
