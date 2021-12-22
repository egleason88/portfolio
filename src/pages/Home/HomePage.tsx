import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

const HomePage = () => (
  <Stack style={{ paddingTop: "15px" }} spacing={6}>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
    <Divider style={{ border: "3px solid teal" }} />
    <Stack spacing={3}>
      <Typography variant="h3" fontWeight={300} textAlign={"center"}>
        Case Studies
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Box
            width={"100%"}
            height={"150px"}
            style={{ backgroundColor: "gray" }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            width={"100%"}
            height={"150px"}
            style={{ backgroundColor: "gray" }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            width={"100%"}
            height={"150px"}
            style={{ backgroundColor: "gray" }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            width={"100%"}
            height={"150px"}
            style={{ backgroundColor: "gray" }}
          />
        </Grid>
      </Grid>
    </Stack>
  </Stack>
);

export default HomePage;
