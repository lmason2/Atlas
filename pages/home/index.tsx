import Typography from "../../src/components/typography";
import Head from "next/head";
import { MainHomeContainer } from "../../src/shared/shared.styled";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Atlas" />
      </Head>
      <MainHomeContainer>
        <Typography type="h1">Welcome Back</Typography>
      </MainHomeContainer>
    </>
  );
};

export default Home;
