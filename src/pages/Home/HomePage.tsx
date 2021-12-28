import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import ProjectCollection from "../Portfolio/ProjectCollection";
import { Projects } from "../Portfolio/Projects";

const HomePage = () => (
  <Stack style={{ paddingTop: "40px" }} spacing={6}>
    <Grid container spacing={3}>
      <Grid item md={5} xs={12}>
        <Box
          width={"100%"}
          height={"250px"}
          style={{ backgroundColor: "gray" }}
        ></Box>
      </Grid>
      <Grid item md={7} xs={12}>
        <Stack>
          <Typography variant="h2" fontWeight={300}>
            Elizabeth Gleason
          </Typography>
          <Typography variant="h4" fontWeight={200}>
            User Experience Designer
          </Typography>
          <Typography>
            Experienced UX Designer with a demonstrated history of working in
            the research industry and higher education. Skilled in User Research
            and Testing, Wire frames, Mockup, Prototyping and Agile Methodology.
            Graduating with a degree in Industrial Design and a Master of
            Science (M.Sc.) in Human Factors from Loughborough University has
            set me up with careers long desire to imporove a users experience in
            all areas of design.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
    <Divider style={{ border: "3px solid teal" }} />
    <Stack spacing={3}>
      <Typography variant="h3" fontWeight={300} textAlign={"center"}>
        Case Studies
      </Typography>
      <ProjectCollection projects={Projects.slice(0, 4)} />
    </Stack>
  </Stack>
);

export default HomePage;
