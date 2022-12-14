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
          <div className={styles.titleContentWidth}>
            <h1 className={styles.title}>
              <a href="https://www.ntnu.edu/studies/courses/IMT4894/">APW</a> project<br></br>Fall 2022
            </h1>

            <p className={styles.description}>
              This progressive web app renders content dynamically based on your network connection by using the
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API"> network information API</a>
            </p>

            <div className={styles.speedBox}>
              <p>Current connection equivalent to:</p>
              <h2>{(connection.effectiveType == "offline") ? 'off' : connection.effectiveType}</h2>
            </div>

            <p className={styles.instructions}>
              Please use the &quot;throttling&quot; option available in the Network-tab in the developer-tools to adjust the content displayed on this site.
            </p>
          </div>

          <div className={styles.statusSpace}>
            <p className={styles.scrollDownInfo}>&darr; Scroll down to view the <a className={styles.stats}>{version}</a> version of the app &darr;</p>
            <div className={styles.statusBigBox}>
              <h3>Your current stats (click to read more):</h3>
              <div className={styles.statusGrid}>

                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.statusBox}>
                  <p>Speed: </p>
                  <p className={styles.stats}>{connection.effectiveType}</p>
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.statusBox}>
                  <p>Downlink: </p>
                  <p className={styles.stats}>{connection.downlink}</p>
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/rtt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.statusBox}>
                  <p>RTT:</p>
                  <p className={styles.stats}>{connection.rtt}</p>
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.statusBox}>
                  <p>RAM:</p>
                  <p className={styles.stats}>{ram}GB</p>
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.statusBox}>
                  <p>Battery charging:</p>
                  <p className={styles.stats}>{battery.charging}</p>
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.statusBox}>
                  <p>Battery level:</p>
                  <p className={styles.stats}>{battery.level}</p>
                </a>
              </div>
            </div>
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
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
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
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                />
              </div>
            </a>

            <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h2>Black hole &rarr;</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.image}
                  alt="Space"
                  src="https://images.unsplash.com/photo-1640984756059-7303641db7cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                  fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                />
              </div>
            </a>
          </div>
        </div>
      </main>


      <a href="https://github.com/sindrehaugsvaer/Next.js-PWA-NetworkInformation" target="_blank" rel="noopener noreferrer">
        <footer className={styles.footer}>
          <p>Created by Sindre</p>
        </footer>
      </a>
    </div>
  )
}

