import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
  }
`;

const KanbanButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default KanbanButton;