import styled from "styled-components";

const StyledHR = styled.hr<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? `100%` : `40px`)};
  transition: all 0.25s linear;
`;

export { StyledHR };
