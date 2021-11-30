import "./styles.css";
import Rotes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="app">
      <Rotes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
