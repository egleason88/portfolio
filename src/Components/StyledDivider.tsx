import { Divider, styled } from "@mui/material";

const StyledDivider = styled(Divider)`
  border-bottom: 5px solid ${({ theme }) => theme.palette.primary.main};
`;

export default StyledDivider;
