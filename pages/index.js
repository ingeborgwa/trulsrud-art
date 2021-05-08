import styled from 'styled-components';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Trulsrud art</title>
        <meta name="description" content="Thea Trulsurd kunst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />
      <main className={styles.main}>
        <LandingPage>
          <h1 className={styles.title}>Trulsrud art</h1>
        </LandingPage>
        <Container>
          <h2>Galleri</h2>
        </Container>
        <Container>
        <h2>Møte Kunstneren</h2>
        </Container>
      </main>

      <footer className={styles.footer}>
        <h1>Footer</h1>
        <a href="#">Her kommer det noe</a>
        <a href="#">Her kommer det noe</a>
      </footer>
    </> 
  )
};





//Style

const LandingPage = styled.div`
  background: url("./public/images/canvas-background.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  h1{ 
    font-family: 'Playfair Display', serif;;
  }


`;

const Container = styled.section`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;