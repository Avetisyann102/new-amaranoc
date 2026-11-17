import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Sales from "./pages/Sales.jsx";

const getRoute = () => (window.location.hash.replace(/^#/, "") || "/");

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route.startsWith("/sales")) return <Sales />;
  return <Home />;
}
