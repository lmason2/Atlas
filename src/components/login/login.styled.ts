import styled from "styled-components";

const Card = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
border: 1px solid ${({ theme }) => theme.text}};
padding: 15px;
border-radius: 15px;
transition: all 0.5s ease-out;
box-shadow: 2px 2px 0 4px ${({ theme }) => theme.text}};
`;

const StyledInput = styled.input`
  background: none;
  color: ${({ theme }) => theme.basic}};
  border: 1px solid ${({ theme }) => theme.basic}};
  border-radius: 5px;
  padding: 10px 10px;
  transition: all 0.25s ease-out;
  width: fit-content;
  font-family: ${({ theme }) => theme.font}};
  font-size: 16px;

  :focus {
    outline: none;
    padding: 15px 10px;
    box-shadow: 0.5px 0.5px 0 1px ${({ theme }) => theme.basic}};
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-bottom: 15px;
  gap: 5px;
`;

const StyledForm = styled.form`
  gap: 1rem;
`;

const InvertedButton = styled.button`
  background-color: ${({ theme }) => theme.text}};
  padding: 15px 20px;
  color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.basic}};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.font}};
  width: 80%;
  height: fit-content;
  transition: all 0.5s ease-out;

  :focus {
    outline: none;
  }

  :hover {
    box-shadow: 1px 1px 0 2px ${({ theme }) => theme.basic}};
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export {
  Card,
  StyledInput,
  StyledForm,
  InputContainer,
  InvertedButton,
  CTAContainer,
};
