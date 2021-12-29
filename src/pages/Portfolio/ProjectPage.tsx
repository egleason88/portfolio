import { Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProject, Projects } from "./Projects";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<IProject>();
  useEffect(() => {
    setProject(Projects.find((x) => x.id === id));
  }, [id]);
  return (
    <Stack style={{ paddingTop: "20px" }} spacing={3}>
      <Typography variant="h1" fontSize={40}>
        {project?.name}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack>
            <Typography variant="h2" fontSize={30} fontWeight={400}>
              Overview
            </Typography>
            <Typography>{project?.overview}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack>
            <Typography variant="h2" fontSize={30} fontWeight={400}>
              Challenge
            </Typography>
            <Typography>{project?.challenge}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack>
            <Typography variant="h2" fontSize={30} fontWeight={400}>
              Results
            </Typography>
            <Typography>{project?.results}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider style={{ borderBottom: "3px solid teal" }} />
      <Grid container spacing={3}>
        {project?.activities.map((activity, i) => (
          <Grid key={i} item>
            <Typography variant="h3" fontSize={25} fontWeight={200}>
              {activity}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Divider style={{ borderBottom: "3px solid teal", paddingTop: "20px" }} />
      <Grid container spacing={6}>
        {project?.images.map((projectImg, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Typography fontSize={20}>{projectImg.title}</Typography>
            <img
              src={projectImg.img}
              alt="Project"
              width={"100%"}
              height={"auto"}
              style={{ objectFit: "cover" }}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ProjectPage;
