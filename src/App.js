import "../src/dist/styles.css";
import { CustomRouter } from "./router/CustomRouter";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {CustomRouter.map((item, index) => {
          return <Route key={index} {...item} />;
        })}
      </Routes>
    </>
  );
}

export default App;
