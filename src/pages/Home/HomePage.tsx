import { Box, Grid, Stack, Typography } from "@mui/material";
import StyledDivider from "../../Components/StyledDivider";
import StyledHeader from "../../Components/StyledHeader";
import ProjectCollection from "../Portfolio/ProjectCollection";
import { Projects } from "../Portfolio/Projects";

const HomePage = () => (
  <Stack spacing={6}>
    <Grid container spacing={2} paddingTop={4} paddingLeft={4}>
      <Grid item md={3} xs={12}>
      <img
            src="/images/Homepage/picture2.png"
            alt="desc"
            width={"60%"}
            height={"auto"}
            style={{ objectFit: "cover"}}
          />
      </Grid>
      <Grid item md={7} xs={12}>
        <Stack style={{ paddingTop: "10px" }} spacing={2}>
          <Typography variant="h2" fontSize={40} fontWeight={400}>
            Elizabeth Gleason
          </Typography>
          <Typography variant="h4" fontSize={24} fontWeight={400}>
            User Experience Designer
          </Typography>
          <Typography>
            An experienced UX Designer with a demonstrated history of working in
            the research industry and higher education. Skilled in User Research
            and Testing, Continuous discovery, Wire frames, Mockup, Prototyping and Agile Methodology.
          </Typography>
          <Typography>
            Graduating with a degree in <b>Industrial Design</b> and a Master of
            Science (M.Sc.) in <b>Human Factors</b> from Loughborough University has
            set me up with careers long desire to improve a users experience in
            all areas of design.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
    <StyledDivider />
    <Stack spacing={3}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StyledHeader variant="h3" fontSize={30} fontWeight={400}>
         Case Studies
        </StyledHeader>
      </div>
      <ProjectCollection projects={Projects.slice(0, 4)} />
    </Stack>
  </Stack>
);

export default HomePage;
