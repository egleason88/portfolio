import { styled, Typography, TypographyProps } from "@mui/material";

const StyledHeader = styled((props: TypographyProps) => (
  <div>
    <Typography {...props} />
  </div>
))`
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 75%;
    height: 3px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default StyledHeader;
