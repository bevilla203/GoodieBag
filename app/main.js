import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));

const App = () => {
  return <h2>Hello</h2>;
};

root.render(<App />);
