import styled from "styled-components";

const StyledHR = styled.hr<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? `100%` : `40px`)};
  transition: all 0.25s linear;
`;

const MainHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
  gap: 1rem;
`;

export { StyledHR, MainHomeContainer };
