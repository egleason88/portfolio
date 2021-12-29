import { Fab, Grid, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const ResumePage = () => {
  return (
    <>
      <Stack>
        <Stack>
          <Typography variant="h1">Profile</Typography>
          <Typography>My cool profile.</Typography>
        </Stack>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack>
              <Stack spacing={3}>
                <Typography variant="h2">Education</Typography>
                <div>
                  <Typography>Master of Science</Typography>
                  <Typography>Human Factors</Typography>
                  <Typography>Location</Typography>
                </div>
                <div>
                  <Typography>Master of Science</Typography>
                  <Typography>Human Factors</Typography>
                  <Typography>Location</Typography>
                </div>
              </Stack>
              <Stack spacing={3}>
                <Typography variant="h2">Key Skills</Typography>
                <div>
                  <Typography variant="h3">Technology</Typography>
                  <Typography>Sketch</Typography>
                  <Typography>Sketch</Typography>
                  <Typography>Sketch</Typography>
                  <Typography>Sketch</Typography>
                  <Typography>Sketch</Typography>
                </div>
                <div>
                  <Typography variant="h3">Activities</Typography>
                  <Typography>User Research / Interviews</Typography>
                  <Typography>User Research / Interviews</Typography>
                  <Typography>User Research / Interviews</Typography>
                  <Typography>User Research / Interviews</Typography>
                  <Typography>User Research / Interviews</Typography>
                  <Typography>User Research / Interviews</Typography>
                  <Typography>User Research / Interviews</Typography>
                </div>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ boxShadow: "inset 10px 0px #000", paddingLeft: "15px " }}
          >
            <Stack>
              <Typography variant="h2">Work Experience</Typography>
              <div>
                <Typography variant="h3">
                  <b>Anthology</b> Buffalo, NY 2018 - Present
                </Typography>
                <Typography variant="h4">Senior UX Designer</Typography>
                <Typography>Worked on stuff!!</Typography>
                <ul>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                </ul>
              </div>
              <div>
                <Typography variant="h3">
                  <b>Strauss Group</b> Buffalo, NY 2018 - Present
                </Typography>
                <Typography variant="h4">Senior UX Designer</Typography>
                <Typography>Worked on stuff!!</Typography>
                <ul>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                </ul>
              </div>
              <div>
                <Typography variant="h3">
                  <b>Iroquois Central School District</b> Buffalo, NY 2018 -
                  Present
                </Typography>
                <Typography variant="h4">Senior UX Designer</Typography>
                <Typography>Worked on stuff!!</Typography>
                <ul>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                  <li>Lead stuff</li>
                </ul>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <a
        href="/portfolio/resume.pdf"
        download={"Elizabeth Gleason Resume.pdf"}
        style={{ position: "fixed", right: "25px", bottom: "25px" }}
      >
        <Fab color="primary" aria-label="Download">
          <DownloadIcon />
        </Fab>
      </a>
    </>
  );
};

export default ResumePage;
