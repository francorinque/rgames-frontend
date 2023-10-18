import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

import { CreatePage, DetailPage, HomePage, WelcomePage } from "./pages";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ModalAlert from "./components/ModalAlert/ModalAlert";

function App() {
  const { showme, msj } = useSelector((state) => state.modal);
  const location = useLocation();

  // clases para el main
  const mainStyle = location.pathname !== "/" ? "mainPadding" : "";
  const mainStyleHome = location.pathname === "/home" && "mainHome";
  return (
    <>
      {showme && <ModalAlert>{msj}</ModalAlert>}
      <main className={`main ${mainStyle} ${mainStyleHome}`}>
        {location.pathname !== "/" && <Nav />}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
        {location.pathname !== "/" && <Footer />}
      </main>
    </>
  );
}

export default App;
