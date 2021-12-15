import Head from 'next/head'

import ProductCard from '../components/molecules/cards/productCard'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductCard />
      </main>     
    </div>
  )
}
