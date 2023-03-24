import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // import Bootstrap JS
import "./App.css";
import MyNavbar from "./components/Navbar";
import NewsPage from "./page/News";
import Comment from "./page/Comment"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <header className="Toolbar">
        <MyNavbar />
      </header>
      <div className="App">
        <div className="PageContent">
          <Routes>
            <Route path="/news" element={<NewsPage />} />
            <Route path="/comment/:id" element={<Comment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
