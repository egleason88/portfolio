import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import { Container, styled } from "@mui/material";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import PortfolioRoutes from "./pages/Portfolio/PortfolioRoutes";
import ResumePage from "./pages/Resume/ResumePage";

const StyledContainer = styled(Container)`
  box-shadow: -30px 0px ${({ theme }) => theme.palette.secondary.main};
  margin-top: 15px;
`;

function App() {
  return (
    <Router basename="/portfolio">
      <StyledContainer maxWidth="xl">
        <NavBar />
        <div style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects/*" element={<PortfolioRoutes />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </StyledContainer>
    </Router>
  );
}

export default App;
