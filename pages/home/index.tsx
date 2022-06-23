import Typography from "../../src/components/typography";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
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
      <Typography type="h1">Welcome Back</Typography>
    </>
  );
};

export default Home;
