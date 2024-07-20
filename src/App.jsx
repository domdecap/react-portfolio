import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
        <>
          <Header />
          <main className="content">
              <Outlet />
          </main>
          <Footer />
        </>
    </div>
  );
}
export default App;
