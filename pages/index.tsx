import type { NextPage } from "next";
import Head from "next/head";
import Typography from "../src/components/typography";
import styled from "styled-components";
import { useState } from "react";
import Login from "../src/components/login";

const Home: NextPage = (props: any) => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Head>
        <title>Atlas</title>
        <meta name="description" content="Atlas" />
        <link key={3} rel="icon" href="/atlas.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <MainContainer>
          {user ? (
            <></>
          ) : (
            <>
              <Login />
            </>
          )}
        </MainContainer>
        <Footer>
          <a
            href="https://atomic-development.vercel.app/"
            style={{ textDecoration: "none" }}
          >
            <Typography type="footer">Created by Atomic Developers</Typography>
          </a>
        </Footer>
      </body>
    </div>
  );
};

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5vh;
  display: flex;
  flex: 1;
  padding: 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.text}};
  justify-content: center;
  align-items: center;
`;

export const NavBarContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 1.5rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.text}};
  background: ${({ theme }) => theme.body}};
  height: 5vh;
  gap: 1rem;
  justify-content: center;
`;

export const LandingPageButton = styled.button`
  background-color: ${({ theme }) => theme.body}};
  padding: 15px 20px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text}};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.font}};
  width: fit-content;
  height: fit-content;

  :hover {
    box-shadow: 1px 1px 0 2px ${({ theme }) => theme.text}};
    transition: all 0.5s ease-out;
  }
`;

const MainContainer = styled.div`
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

export default Home;
