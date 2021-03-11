import Head from "next/head";
import FullScreenRespBackground from "../components/FullScreenRespBackground";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>roger-rossell.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <FullScreenRespBackground image="image.jpg" />
    </div>
  );
}