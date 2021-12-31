import { Grid, Stack, Typography } from "@mui/material";
import StyledHeader from "../../Components/StyledHeader";

const AboutPage = () => {
  return (
    <Stack>
      <StyledHeader variant={"h1"} fontSize={30} style={{ paddingTop: "10px"}}>
        About me
      </StyledHeader>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Stack spacing={2} style={{ paddingTop: "40px"}}>
            <Typography>
              I grew up in the UK and after graduating with a BaHons in Industrial Design and a Masters
              in Ergonomics/Human Factors from Loughborough University, I
              joined QinetiQ as a Human Factors Consultant.
            </Typography>
            <Typography>
              Working on projects for the UK Ministry of Defence, US Department
              of Defence, Civil Aviation industry and the London Underground
              fully immersed me in the world of human factors and design,
              leading me to never being able to look at products and systems the
              same way again.
            </Typography>
            <Typography>
            I moved to the US in 2006 and as well as being a UX designer, I am a mum who loves to travel
              with her son, both in the USA and abroad, I can also be seen
              drawing on my ipad and throwing the odd cake in the oven.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12}>
          <Stack spacing={2} style={{ paddingTop: "10px"}}>
            <StyledHeader variant={"h2"} fontSize={24}>
              Key Skills
            </StyledHeader>
            <ul>
              <li>
                <Typography>
                  User research - finding out what users really need, not what
                  they think they need.
                </Typography>
              </li>
              <li>
                <Typography>
                  Problem solving - finding ways to solve underlying problems,
                  in a way that best suits the needs of the user
                </Typography>
              </li>
              <li>
                <Typography>
                  Communication - with users as well as team members
                </Typography>
              </li>
              <li>
                <Typography>
                  Continuous Discovery - always looking at what we can do to
                  make a users experience better, through both user research and
                  feedback
                </Typography>
              </li>
            </ul>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ paddingTop: "40px"}} paddingLeft={20}>
        <Grid item xs={12} md={4}>
          <img
            src="/images/Homepage/picture.png"
            alt="desc"
            width={"80%"}
            height={"auto"}
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src="/images/Aboutme/Picture2.JPG"
            alt="desc"
            width={"80%"}
            height={"auto"}
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src="/images/Aboutme/Picture1.png"
            alt="desc"
            width={"50%"}
            height={"auto"}
            style={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
export default AboutPage;
