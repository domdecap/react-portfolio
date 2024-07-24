import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <>
        <div>
            <Header />
        </div>
        <main className="content">
          <Outlet />
        </main>
        <div>
            <Footer />
        </div>
      </>
    </div>
  );
}
export default App;
