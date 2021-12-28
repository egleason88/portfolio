import { Route, Routes } from "react-router-dom";
import PortfolioPage from "./PortfolioPage";
import ProjectPage from "./ProjectPage";

const PortfolioRoutes = () => (
  <Routes>
    <Route path=":id" element={<ProjectPage />} />
    <Route path="" element={<PortfolioPage />} />
  </Routes>
);

export default PortfolioRoutes;
