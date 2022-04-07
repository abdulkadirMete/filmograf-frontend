import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Aside } from "./components/aside/Aside";
import { AuthRoute } from "./components/auth/AuthRoute";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { UtilContext } from "./context/utilContext/UtilContext";
import { Auth } from "./pages/auth/Auth";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { PopularMovies } from "./pages/PopularMovies";
import { Settings } from "./pages/setting/Settings";
import { Verified } from "./pages/verified/Verified";
import { WatchList } from "./pages/watchList/WatchList";
import GlobalStyle from "./styles/globalStyles";

function App() {
  const { showContact } = useContext(UtilContext);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Aside />
      {showContact && <Contact />}
      <Routes>
        {/* home  */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies/:page" element={<Home />} />
        <Route exact path="/filter/types/:type/:page" element={<Home />} />
        <Route exact path="/filter/types/:type/" element={<Home />} />
        <Route exact path="/filter/release/:release/:page" element={<Home />} />
        <Route exact path="/filter/release/:release/" element={<Home />} />
        <Route exact path="/filter/robot/:page" element={<Home />} />
        <Route exact path="/filter/robot" element={<Home />} />
        {/* end of home */}

        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/popular" element={<PopularMovies />} />
        <Route path="/api/auth/verify/:id/:token" element={<Verified />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/auth"
          element={
            <AuthRoute>
              <Auth />
            </AuthRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
