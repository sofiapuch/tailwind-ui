import Head from 'next/head'

import ProductList from '../components/organisms/productList/productList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductList />
      </main>     
    </>
  )
}
