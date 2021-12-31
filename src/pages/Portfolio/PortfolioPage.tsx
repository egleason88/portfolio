import { Stack, Typography } from "@mui/material";
import StyledHeader from "../../Components/StyledHeader";
import ProjectCollection from "./ProjectCollection";
import { Projects } from "./Projects";

const PortfolioPage = () => {
  return (
    <Stack spacing={3}>

      <StyledHeader variant={"h1"} fontSize={30} style={{ paddingTop: "10px"}}>
        Case Studies
      </StyledHeader>
      <ProjectCollection projects={Projects} />
    </Stack>
  );
};
export default PortfolioPage;
