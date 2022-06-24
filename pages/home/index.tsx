import Typography from "../../src/components/typography";
import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import ExpandedWeek from "../../src/components/expandedWeek";

const Home = () => {
  const [fullWeek, setFullWeek] = useState(false);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Atlas" />
      </Head>
      <MainHomeContainer>
        <Typography type="h1">Welcome Back</Typography>
        <ButtonContainer>
          <SmallActionButton
            onClick={() => {
              console.log(fullWeek);
              setFullWeek((w) => !w);
            }}
          >
            {fullWeek ? `Collapse Week` : `Expand Week`}
          </SmallActionButton>
        </ButtonContainer>
        {!fullWeek ? (
          <RowContainer>
            <Card>
              <Typography type="h3">Yesterday</Typography>
              <hr
                style={{
                  width: "90%",
                  border: "1px solid",
                  borderRadius: "10px",
                }}
              />
            </Card>
            <Card>
              <Typography type="h3">Today</Typography>
              <hr
                style={{
                  width: "90%",
                  border: "1px solid",
                  borderRadius: "10px",
                }}
              />
            </Card>
            <Card>
              <Typography type="h3">Tomorrow</Typography>
              <hr
                style={{
                  width: "90%",
                  border: "1px solid",
                  borderRadius: "10px",
                }}
              />
            </Card>
          </RowContainer>
        ) : (
          <ExpandedWeek />
        )}
      </MainHomeContainer>
    </>
  );
};

const MainHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 100px;
  height: 100%;
  gap: 1rem;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  gap: 1rem;
`;

const Card = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
border: 1px solid ${({ theme }) => theme.text}};
padding: 15px 40px;
border-radius: 15px;
transition: all 0.5s ease-out;
box-shadow: 1px 1px 0 2px ${({ theme }) => theme.text}};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: end;
`;

const SmallActionButton = styled.button`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.basic};
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  background: none;
`;

export default Home;
