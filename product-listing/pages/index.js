import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/plp.module.css'

const CommonHeader = dynamic(() => import('./bootstrap'));

// const CommonHeader = dynamic(() =>
//   import('./bootstrap').then((mod) => mod.Hello)
// )

export default function ProductListing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Listing App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CommonHeader />

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to PLP Micro Frontend App
        </h3>
      </main>

      <footer className={styles.footer}>
        Container Footer
      </footer>
    </div>
  )
}
