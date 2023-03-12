import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // import Bootstrap JS
import "./App.css";
import MyNavbar from "./components/Navbar";
import MyLayout from "./components/MyLayout";

function App() {
  return (
    <div className="App">
      <header className="Toolbar">
        <MyNavbar />
      </header>
      <div className="PageContent">
        <MyLayout />
      </div>
    </div>
  );
}

export default App;
