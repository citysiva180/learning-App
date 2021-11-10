//
// ######## APP PAGE IS THE ENTRY POINT #############
//
import "bootstrap/dist/css/bootstrap.css"; //Install bootstrap and import in here
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header";
import CoursesPage from "./components/Courses/CoursesPage";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
