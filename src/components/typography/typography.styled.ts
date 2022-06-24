import styled from "styled-components";

const H1Typography = styled.p`
  font-size: 50px;
  color: ${({ theme }) => theme.text};
  decoration: none;
  margin: 0px;
  height: fit-content;
  text-align: center;
`;

const H2Typography = styled.p`
  font-size: 40px;
  color: ${({ theme }) => theme.text};
  decoration: none;
  margin: 0px;
  height: fit-content;
  text-align: center;
`;

const H3Typography = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  decoration: none;
  margin: 0px;
  height: fit-content;
  text-align: center;
`;

const H4Typography = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  decoration: none;
  margin: 0px;
  height: fit-content;
  text-align: center;
`;

const H5Typography = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  decoration: none;
  margin: 0px;
  height: fit-content;
  text-align: center;
`;

const FooterTypography = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  decoration: none;
  margin: 0px;
  height: fit-content;
  text-align: center;
`;

const BasicTypography = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  decoration: none;
  margin: 0px;
  height: fit-content;
  text-align: center;
`;

const InputTypography = styled.label`
  font-size: 10px;
  color: ${({ theme }) => theme.text};
  decoration: none;
  margin: 0px;
  text-align: start;
  text-align: center;
`;

export {
  H1Typography,
  H2Typography,
  H3Typography,
  H4Typography,
  H5Typography,
  FooterTypography,
  BasicTypography,
  InputTypography,
};
