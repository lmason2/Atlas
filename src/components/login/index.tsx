import { useState } from "react";
import { LandingPageButton } from "../../../pages";
import Typography from "../typography";
import { InputTypography } from "../typography/typography.styled";
import {
  Card,
  CTAContainer,
  InputContainer,
  InvertedButton,
  StyledForm,
  StyledInput,
} from "./login.styled";

const Login = () => {
  const [isSigningUp, setIsSiginingUp] = useState(false);

  return (
    <>
      <Typography type="h1">Atlas</Typography>
      <Card>
        <Typography type="h3">Login</Typography>
        <hr
          style={{ width: "90%", border: "1px solid", borderRadius: "10px" }}
        />
        <StyledForm action="/home">
          {isSigningUp && (
            <>
              <InputContainer>
                <InputTypography>Full Name:</InputTypography>
                <StyledInput type="email" required />
              </InputContainer>
            </>
          )}
          <InputContainer>
            <InputTypography>Email:</InputTypography>
            <StyledInput type="email" required />
          </InputContainer>
          <InputContainer>
            <InputTypography>Password:</InputTypography>
            <StyledInput type="password" required />
          </InputContainer>
          {isSigningUp && (
            <>
              <InputContainer>
                <InputTypography>Confirm:</InputTypography>
                <StyledInput type="password" required />
              </InputContainer>
            </>
          )}
          <CTAContainer>
            {!isSigningUp && (
              <InvertedButton type="submit">Login</InvertedButton>
            )}
            <InvertedButton
              onClick={(e) => {
                e.preventDefault();
                if (!isSigningUp) {
                  setIsSiginingUp(true);
                } else {
                  // trigger account creation
                }
              }}
              style={{ marginBottom: `${isSigningUp && `10px`}` }}
            >
              {isSigningUp ? `Create Account` : `Sign Up`}
            </InvertedButton>
          </CTAContainer>
          {isSigningUp && (
            <a
              onClick={(e: any) => {
                e.preventDefault();
                setIsSiginingUp(false);
              }}
              style={{ cursor: "pointer", marginTop: "10px" }}
            >
              <Typography type="h5">Already have an account? Log In</Typography>
            </a>
          )}
        </StyledForm>
      </Card>
      <Typography type="h5">Run the world and track where you go</Typography>
    </>
  );
};

export default Login;
