import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import YoutubeIframe from "./youtubevideo";
import { useNetworkInformation } from '../hooks/useNetworkInformation';
import { useBatteryStatus } from '../hooks/useBatteryStatus';
import { useDeviceMemory } from '../hooks/useDeviceMemory';

export function checkVersion(connection?: string) {
  let version: string;
  switch (connection) {
    case "offline":
      return version = "offline";
    case "slow-2g":
      return version = "light";
    case "2g":
      return version = "light";
    case "3g":
      return version = "medium";
    case "4g":
      return version = "full";
    default:
      throw Error('Could not select version');
  }
}

export default function Home() {
  const battery = useBatteryStatus();
  const connection = useNetworkInformation();
  const ram = useDeviceMemory();
  let version = "medium";
  console.log("connection:", connection);
  console.log("batteri:", battery);
  console.log("ram", ram);

  if (Object.keys(connection).length != 0) {
    version = checkVersion(connection.effectiveType);
  }
  console.log(version);
  const videoProps = {
    videoId: "DgqAAE9Aagc?rel=0&vq=medium",
    title: "The video:",
    autoplay: true
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>APW 2022</title>
        <meta name="description" content="APW 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <a href="https://nextjs.org">video page!</a> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          APW project<br></br>Fall 2022 v1
        </h1>

        <p className={styles.description}>
          This progressive web app renders content dynamically <br></br> based on your network connection by using the <br></br>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API">network information API</a>
          {/* <code className={styles.code}>network information API</code> */}
        </p>

        <div className={styles.statusSpace}>
          <h3>Your current stats:</h3>
          <div className={styles.statusGrid}>
            <div className={styles.statusBox}>
              <p>Speed: <a className={styles.stats}>{connection.effectiveType}</a></p>
            </div>
            {/* <h3 className={styles.centerText}>Type: {connection.type}</h3> */}
            <div className={styles.statusBox}>
              <p>Downlink: <a className={styles.stats}>{connection.downlink}</a></p>
            </div>
            <div className={styles.statusBox}>
              <p>RTT: <a className={styles.stats}>{connection.rtt}</a></p>
            </div>
            {/* console.log(`This device has at least ${memory}GiB of RAM.`) */}
            <div className={styles.statusBox}>
              <p>RAM: <a className={styles.stats}>{ram}GB</a></p>
            </div>
            <div className={styles.statusBox}>
              <p>Battery charging: <a className={styles.stats}>{battery.charging}</a></p>
            </div>
            <div className={styles.statusBox}>
              <p>Battery level: <a className={styles.stats}>{battery.level}</a></p>
            </div>
          </div>
        </div>

        <h2>Displaying the {version} version:</h2>

        <YoutubeIframe {...videoProps} />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

          {/* <Image src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg" width="200" height="100" alt="bilde"></Image> */}
          <Image
            // Absolute URL
            src='https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg'
            // src='https://unsplash.com/photos/XV1qykwu82c'
            alt='User profile picture'
            width={300}
            height={300}
          />

        </div>
      </main>

      <footer className={styles.footer}>
        <p>Created by Sindre</p>
      </footer>
    </div>
  )
}

