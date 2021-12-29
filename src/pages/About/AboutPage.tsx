import { Grid, Stack, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Grid container spacing={12}>
      <Grid item md={6} xs={12}>
        <Stack spacing={2}style={{ paddingTop: "20px" }}>
        <Typography variant={"h1"} fontSize={30}>About me</Typography>
          <Typography>
            After graduating with a BaHons in Industrial Design and a Masters in
            Ergonomics / Human Factors from Loughborough University, I joined
            QinetiQ as a Human Factors Consultant.
          </Typography>
          <Typography>
            Working on projects for the UK Ministry of Defence, US Department of
            Defence, Civil Aviation industry and the London Underground fully
            immersed me in the world of human factors and design, leading me to
            never being able to look at products and systems the same way again
          </Typography>
          <Typography>
            As well as being a UX designer, I am a mum who loves to travel with
            her son, both in the USA and abroad, I can also be seen drawing on
            my ipad and throwing the odd cake in the oven, not at the same time
          </Typography>
        </Stack>
      </Grid>
      <Grid item md={6} xs={12}>
      <Stack spacing={2}style={{ paddingTop: "60px" }}>
          <Typography variant={"h2"} fontSize={24}>Key Skills</Typography>
          <ul>
            <li>
              <Typography>
                User research - finding out what users really need, not what
                they think they need.
              </Typography>
            </li>
            <li>
              <Typography>
                Problem solving - finding ways to solve underlying problems, in
                a way that best suits the needs of the user
              </Typography>
            </li>
            <li>
              <Typography>
                Communication - with users as well as team members
              </Typography>
            </li>
            <li>
              <Typography>
                Continuous Discovery - always looking at what we can do to make
                a users experience better, through both user research and
                feedback
              </Typography>
            </li>
          </ul>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default AboutPage;
