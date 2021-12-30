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
    box-shadow: inset 0px -5px ${({ theme }) => theme.palette.primary.main};
  }
  &.active {
    box-shadow: inset 0px -15px ${({ theme }) => theme.palette.primary.main};
    transition: box-shadow 0.5s;
  }
`;

const NavBar = styled(({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="navContainer">
        <div style={{ display: "flex", flexGrow: "1" }}>
          <div className="navMain" style={{ display: "inline-flex" }}>
            <StyledNavLink to="/">
              <Stack>
                <Typography fontSize={25}>Elizabeth Gleason</Typography>
                <Typography>User Experience Designer</Typography>
              </Stack>
            </StyledNavLink>
          </div>
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
})`
  & .navContainer {
    display: flex;
    border-top: 5px solid ${({ theme }) => theme.palette.primary.main};
    border-bottom: 5px solid ${({ theme }) => theme.palette.primary.main};
  }

  & .navMain {
    box-shadow: inset 0px 12px ${({ theme }) => theme.palette.primary.main};
  }
`;

export default NavBar;
