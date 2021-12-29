import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import { Container } from "@mui/material";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import PortfolioRoutes from "./pages/Portfolio/PortfolioRoutes";
import ResumePage from "./pages/Resume/ResumePage";

function App() {
  return (
    <Router basename="/portfolio">
      <Container
        maxWidth="xl"
        style={{ boxShadow: "-30px 0px #000", marginTop: "15px" }}
      >
        <NavBar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/*" element={<PortfolioRoutes />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
