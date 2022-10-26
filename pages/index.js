import { Typography } from "@mui/material";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next sanity ecommerce</title>
        <meta
          name="description"
          content="Ecommerce website with nextjs and sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography component="h1" variant="h1">
        Sanity Amazona
      </Typography>
    </div>
  );
}
