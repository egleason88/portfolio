import { Card, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import StyledHeader from "../../Components/StyledHeader";
import { IProject } from "./Projects";

const ProjectCard = ({ project }: { project: IProject }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <StyledHeader fontSize={25} style={{ marginBottom: "5px" }}>
        {project.name}
      </StyledHeader>
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
    <Grid container columnSpacing={2} rowSpacing={2}>
      {projects.map((project) => (
        <Grid key={project.name} item md={6} xs={12}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectCollection;
