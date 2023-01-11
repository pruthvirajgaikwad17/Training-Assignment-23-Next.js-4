import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/pruthviraj");
  const data = response.json();
  return data;
};

export default function Home() {
  const { data, error } = useSWR("profile", fetcher);
  console.log(data);
  if (!data) {
    return (
      <div className={styles.container}>
        <div className={styles.profilebox}>
          <img src="/menu.png" alt="this is menu" className={styles.menuIcon} />
          <img
            src="/setting.png"
            alt="this is menu"
            className={styles.settingIcon}
          />
          <img
            src="/loading.webp"
            alt="Profile Image"
            className={styles.profileIcon}
          />
          <h3>Loading</h3>
          <p>Loading</p>
          <p>Location- Loading</p>
          <div className={styles.socialMedia}>
            <img src="/instagram.png" alt="Loading" />
            <img src="/telegram.png" alt="Loading" />
            <img src="/dribble.png" alt="Loading" />
          </div>
          <button type="button">Loading</button>
          <div className={styles.profileBottom}>
            {/*<p>More About My Profile</p>
            <img src="/arrow.png" />*/}
            <h4>Projects : Loading</h4>
            <h4>Experience : Loading</h4>
            <h4>Followers : Loading</h4>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.profilebox}>
          <img src="/menu.png" alt="this is menu" className={styles.menuIcon} />
          <img
            src="/setting.png"
            alt="this is menu"
            className={styles.settingIcon}
          />
          <img
            src={data.images}
            alt="this is menu"
            className={styles.profileIcon}
          />
          <h3>{data.name}</h3>
          <p>{data.position}</p>
          <p>Location- {data.location}</p>
          <div className={styles.socialMedia}>
            <img src="/instagram.png" />
            <img src="/telegram.png" />
            <img src="/dribble.png" />
          </div>
          <button type="button">Follow</button>
          <div className={styles.profileBottom}>
            {/*<p>More About My Profile</p>
            <img src="/arrow.png" />*/}
            <h4>Projects : {data.Projects}</h4>
            <h4>Experience : {data.experience}</h4>
            <h4>Followers : {data.Followers}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
