import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import "./assets/scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
