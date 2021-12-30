import { Box, Grid, Stack, Typography } from "@mui/material";
import StyledDivider from "../../Components/StyledDivider";
import StyledHeader from "../../Components/StyledHeader";
import ProjectCollection from "../Portfolio/ProjectCollection";
import { Projects } from "../Portfolio/Projects";

const HomePage = () => (
  <Stack spacing={6}>
    <Grid container spacing={3}>
      <Grid item md={5} xs={12}>
        <Box
          width={"400px"}
          height={"250px"}
          style={{ backgroundColor: "gray" }}
        ></Box>
      </Grid>
      <Grid item md={7} xs={12}>
        <Stack style={{ paddingTop: "0px" }} spacing={2}>
          <Typography variant="h2" fontSize={40} fontWeight={300}>
            Elizabeth Gleason
          </Typography>
          <Typography variant="h4" fontSize={24} fontWeight={200}>
            User Experience Designer
          </Typography>
          <Typography>
            Experienced UX Designer with a demonstrated history of working in
            the research industry and higher education. Skilled in User Research
            and Testing, Wire frames, Mockup, Prototyping and Agile Methodology.
            Graduating with a degree in Industrial Design and a Master of
            Science (M.Sc.) in Human Factors from Loughborough University has
            set me up with careers long desire to improve a users experience in
            all areas of design.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
    <StyledDivider />
    <Stack spacing={3}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StyledHeader variant="h3" fontSize={30} fontWeight={300}>
          Case Studies
        </StyledHeader>
      </div>
      <ProjectCollection projects={Projects.slice(0, 4)} />
    </Stack>
  </Stack>
);

export default HomePage;
