// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import Error from "./components/NotFound/NotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route component={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
