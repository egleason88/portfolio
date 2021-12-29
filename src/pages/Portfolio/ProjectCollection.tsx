import { Card, CardHeader, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IProject } from "./Projects";

const ProjectCard = ({ project }: { project: IProject }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <Typography fontSize={25}>{project.name}</Typography>
      <Link to={`/projects/${project.id}`}>
        <Card
          square
          elevation={isHover ? 12 : 1}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            src={project.img}
            alt={project.name}
            width={"100%"}
            height={"auto"}
            style={{
              objectFit: "cover",
            }}
          />
        </Card>
      </Link>
    </>
  );
};

const ProjectCollection = ({ projects }: { projects: IProject[] }) => {
  return (
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid key={project.name} item md={6} xs={12}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectCollection;
