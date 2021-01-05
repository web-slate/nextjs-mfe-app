import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Container App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to Container Micro Frontend App
        </h3>
      </main>

      <Footer />
    </div>
  )
}
