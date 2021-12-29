import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import ProjectCollection from "../Portfolio/ProjectCollection";
import { Projects } from "../Portfolio/Projects";

const HomePage = () => (
  <Stack style={{ paddingTop: "40px" }} spacing={6}>
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
            set me up with careers long desire to imporove a users experience in
            all areas of design.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
    <Divider style={{ border: "3px solid teal" }} />
    <Stack spacing={3}>
      <Typography variant="h3" fontSize={30} fontWeight={300} textAlign={"center"}>
        Case Studies
      </Typography>
      <ProjectCollection projects={Projects.slice(0, 4)} />
    </Stack>
  </Stack>
);

export default HomePage;
