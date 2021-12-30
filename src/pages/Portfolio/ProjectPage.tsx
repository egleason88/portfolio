import { Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StyledDivider from "../../Components/StyledDivider";
import StyledHeader from "../../Components/StyledHeader";
import { IProject, Projects } from "./Projects";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<IProject>();
  useEffect(() => {
    setProject(Projects.find((x) => x.id === id));
  }, [id]);
  return (
    <Stack spacing={3}>
      <StyledHeader variant="h1" fontSize={40}>
        {project?.name}
      </StyledHeader>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack>
            <StyledHeader
              variant="h2"
              fontSize={30}
              fontWeight={400}
              style={{ marginBottom: "5px" }}
            >
              Overview
            </StyledHeader>
            <Typography>{project?.overview}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack>
            <StyledHeader
              variant="h2"
              fontSize={30}
              fontWeight={400}
              style={{ marginBottom: "5px" }}
            >
              Challenge
            </StyledHeader>
            <Typography>{project?.challenge}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack>
            <StyledHeader
              variant="h2"
              fontSize={30}
              fontWeight={400}
              style={{ marginBottom: "5px" }}
            >
              Results
            </StyledHeader>
            <Typography>{project?.results}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <StyledDivider />
      <Grid container justifyContent={"space-evenly"}>
        {project?.activities.map((activity, i) => (
          <Grid key={i} item>
            <Typography variant="h3" fontSize={25} fontWeight={200}>
              {activity}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <StyledDivider />
      <Grid container spacing={2}>
        {project?.images.map((projectImg, i) => (
          <Grid key={i} item xs={12} md={4}>
            <StyledHeader fontSize={20} style={{ marginBottom: "5px" }}>
              {projectImg.title}
            </StyledHeader>
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
