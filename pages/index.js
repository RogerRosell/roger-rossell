import Head from "next/head";
import FullScreenRespBackground from "../components/FullScreenRespBackground";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>roger-rossell.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullScreenRespBackground image="image.jpg" />
    </div>
  );
}
