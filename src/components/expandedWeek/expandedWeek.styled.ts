import styled from "styled-components";

const RowCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  border: 2px solid ${({ theme }) => theme.basic};
  padding: 15px 40px;
  border-radius: 15px;
  transition: all 0.5s ease-out;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  :hover {
    box-shadow: 2px 2px 0 4px ${({ theme }) => theme.basic};
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: start;
  width: 20%;
`;

const ColumnContainer = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: start;
  align-items: center;
  width: 80%;
  border-radius: 10px;
  border: 2px solid ${({ type }) => type}};
`;

const VerticalHR = styled.hr`
  height: 90%;
  border: 1px solid;
  border-radius: 10px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 0px;
`;

export { RowCard, TitleDiv, ColumnContainer, VerticalHR };
