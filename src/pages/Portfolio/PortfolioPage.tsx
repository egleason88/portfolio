import ProjectCollection from "./ProjectCollection";
import { Projects } from "./Projects";

const PortfolioPage = () => {
  return (
    <div>
      <ProjectCollection projects={Projects} />
    </div>
  );
};
export default PortfolioPage;
