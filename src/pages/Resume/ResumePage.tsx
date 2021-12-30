import { Fab, Grid, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const ResumePage = () => {
  return (
    <>
      <Stack>
        <Stack style={{ paddingTop: "10px" }} spacing={2}>
          <Typography variant="h1" fontSize={40}>Profile</Typography>
          <Typography>I am a User Experience Designer with a background in Human Factors and Industrial Design. In my current role I contribute
to all phases of product development including user research, wire framing and mockups, usability testing, prototyping and
post release feedback. Working with an agile, continuous discovery methodology allows me to understand and meet the
needs of users, delivering solutions that make a positive impact within our applications</Typography>
        </Stack>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack>
              <Stack style={{ paddingTop: "40px" }} spacing={2}>
                <Typography variant="h2" fontSize={30}>Education</Typography>
                <div>
                  <Typography fontSize={20}>Master of Science -</Typography>
                  <Typography fontSize={20} fontWeight={800}>Human Factors</Typography>
                  <Typography fontSize={14}>Loughborough University, UK</Typography>
                </div>
                <div>
                  <Typography fontSize={20}>Bachelor of Arts Hons -</Typography>
                  <Typography fontSize={20} fontWeight={800}>Industrial Design and Technology</Typography>
                  <Typography fontSize={14}>Loughborough University, UK</Typography>
                </div>
              </Stack>
              <Stack style={{ paddingTop: "40px" }} spacing={2}>
                <Typography variant="h2" fontSize={30}>Key Skills</Typography>
                <div>
                  <Typography variant="h3" fontSize={20} fontWeight={800}>Technology</Typography>
                  <Typography fontSize={20}>Sketch</Typography>
                  <Typography fontSize={20}>Figma</Typography>
                  <Typography fontSize={20}>Omnigraffle</Typography>
                  <Typography fontSize={20}>Adobe XD</Typography>
                  <Typography fontSize={20}>AppCues</Typography>
                </div>
                <div>
                  <Typography variant="h3" fontSize={20} fontWeight={800}>Activities</Typography>
                  <Typography fontSize={20}>User Research / Interviews</Typography>
                  <Typography fontSize={20}>Continuous Discovery</Typography>
                  <Typography fontSize={20}>Cross Team Collaboration</Typography>
                  <Typography fontSize={20}>User Empathy</Typography>
                  <Typography fontSize={20}>Usability Testing</Typography>
                  <Typography fontSize={20}>Accessibility Audits</Typography>
                  <Typography fontSize={20}>Task Analysis</Typography>
                  <Typography fontSize={20}>Wireframes and Mockups</Typography>
                  <Typography fontSize={20}>Prototyping</Typography>
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
              <Typography variant="h2" fontSize={30}>Work Experience</Typography>
              <div>
                <Typography variant="h3" fontSize={20}>
                  <b>Anthology</b> Buffalo, NY 2018 - Present
                </Typography>
                <Typography variant="h4" fontSize={20}>Senior UX Designer</Typography>
                <Typography fontSize={20}>Working on various applications for higher education</Typography>
                <ul>
                  <li>Lead UX designer on Continuous Discovery product team</li>
                  <li>Conduct User Interviews and research</li>
                  <li>Create wire frames and mockups</li>
                  <li>Conduct usability studies</li>
                  <li>Create personas and user journeys</li>
                  <li>Manage accessibility audits</li>
                  <li>Generate in app feedback</li>
                </ul>
              </div>
              <div>
                <Typography variant="h3" fontSize={20}>
                  <b>Strauss Group</b> Buffalo, NY 2018 - Present
                </Typography>
                <Typography variant="h4" fontSize={20}>Executive Search Consultant</Typography>
                <ul>
                  <li>Manage 360 desk</li>
                  <li>Business development</li>
                  <li>Recruit for UI/UX Designers</li>
                </ul>
              </div>
              <div>
                <Typography variant="h3" fontSize={20}>
                  <b>Iroquois Central School District</b> Elma, NY - 2015 - 2018
                </Typography>
                <Typography variant="h4" fontSize={20}>Teacher Aide</Typography>
                <ul></ul>
              </div>
              <div>
              <Typography variant="h3" fontSize={20}>
                  <b>English Tea Ladies</b> Elma, NY 2009 - 2016
                </Typography>
                <Typography variant="h4" fontSize={20}>Owner of catering business</Typography>
                <ul></ul>
              </div>
              <div>
              <Typography variant="h3" fontSize={20}>
                  <b>QINETIQ</b> (formerly Defence Evaluation Research Agency)
Farnborough, UK - 2001 - 2006
                </Typography>
                <Typography variant="h4" fontSize={20}>Lead Human Factors Consultant and Assistant Design Lead</Typography>
                <ul>
                  <li>HF Evaluations of all land platforms in the British Army.</li>
                  <li>Wrote Human Factors Integration Management plan (HFIMP) 
	  for US DoD and London Underground</li>
                  <li>Human factors assessment and testing of prototypes</li>
                  <li>Conducted extensive task analysis.</li>
                  <li>Project manager for sleep study.</li>
                  <li>HF Evaluations Assessment of British Navy equipmentLead stuff</li>
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
