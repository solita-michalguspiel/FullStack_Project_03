import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // import Bootstrap JS
import "./App.css";
import NewsPage from "./page/News";
import Comment from "./page/Comment";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route path="/news" element={<NewsPage />} />
            <Route path="/comment/:id" element={<Comment />} />
            <Route path="*" element={<Navigate to="/news" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
