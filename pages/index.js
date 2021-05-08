import styled from 'styled-components';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavigationBar from '../components/NavigationBar';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Trulsrud art</title>
        <meta name="description" content="Thea Trulsurd kunst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
         <NavigationBar />
        <LandingPage>
          <h1 className={styles.title}>Trulsrud art</h1>
        </LandingPage>
        <section className={styles.container}>
          <h2>Work</h2>
        </section>
        <section className={styles.container}>
          <h2>Om Thea</h2>
        </section>
      </main>

      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
    </div> 
  )
};

//Style

const LandingPage = styled.div`
  background: url("./public/images/canvas-background.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
