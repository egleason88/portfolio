import { Stack, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 15px 25px;
  text-decoration: none;
  color: #000;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: inset 0px -5px teal;
  }
  &.active {
    box-shadow: inset 0px -15px teal;
  }
`;

const NavBar = () => {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          borderTop: "5px solid teal",
          borderBottom: "5px solid teal",
        }}
      >
        <div style={{ display: "flex", flexGrow: "1" }}>
          <StyledNavLink to="/" style={{ boxShadow: "inset 0px 12px teal" }}>
            <Stack>
              <Typography fontSize={25}>Elizabeth Gleason</Typography>
              <Typography>User Experience Designer</Typography>
            </Stack>
          </StyledNavLink>
        </div>
        <div style={{ display: "flex" }}>
          <StyledNavLink to="/about">
            <Typography
              style={{
                display: "inline-flex",
              }}
            >
              About Me
            </Typography>
          </StyledNavLink>
          <StyledNavLink to="/projects">
            <Typography style={{ display: "inline-flex" }}>
              Portfolio
            </Typography>
          </StyledNavLink>
          <StyledNavLink to="/resume">
            <Typography style={{ display: "inline-flex" }}>Resume</Typography>
          </StyledNavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
