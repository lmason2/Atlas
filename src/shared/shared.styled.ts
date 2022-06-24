import styled from "styled-components";

const StyledHR = styled.hr<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? `100%` : ``)};
  width: 100%;
  transition: all 0.25s linear;
  border: 1px solid ${({ theme }) => theme.basic};
  borderRadius: "10px;
  
`;

export { StyledHR };
