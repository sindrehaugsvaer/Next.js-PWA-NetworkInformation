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
      <main className={styles.main}>
        <div className={styles.home}>
          <h1 className={styles.title}>
            <a href="https://www.ntnu.edu/studies/courses/IMT4894/">APW</a> project<br></br>Fall 2022
          </h1>

          <p className={styles.description}>
            This progressive web app renders content dynamically <br></br> based on your network connection by using the <br></br>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API">network information API</a>
            {/* <code className={styles.code}>network information API</code> */}
          </p>

          <p className={styles.instructions}>
            Please use the &quot;throttling&quot; option available in<br></br> the Network-tab in the developer-tools to<br></br> adjust the content displayed on this site.
          </p>

          <div className={styles.statusSpace}>
            <h2>Your current stats:</h2>
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
            <p>&darr; Currently displaying the <a className={styles.stats}>{version}</a> version of the app &darr;</p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.grid}>

            <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h2>Universe &rarr;</h2>
              <p>Click here to find out more about it, or watch this awesome YouTube-video:</p>
              <YoutubeIframe {...videoProps} />
            </a>

            <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h2>Galaxies &rarr;</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.image}
                  alt="Space"
                  src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                  fill
                />
              </div>
            </a>

            <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h2>Space Missions &rarr;</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.image}
                  alt="Space"
                  src="https://images.unsplash.com/photo-1596827414894-911f1265e391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                  fill
                />
              </div>
            </a>

            <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h2>Lorem &rarr;</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.image}
                  alt="Space"
                  src="https://images.unsplash.com/photo-1640984756059-7303641db7cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                  fill
                />
              </div>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Created by Sindre</p>
      </footer>
    </div>
  )
}

