import Head from 'next/head'
import pageStyles from './victor.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Victors User Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={pageStyles.title}>
         Victor Sanborn
        </h1>

        <p className={pageStyles.description}>
          My awsome page
        </p>

        <p className={pageStyles.infoSection}>
          Lorem ipsum dolor sit amet. Qui sequi assumenda ut mollitia velit eum cumque necessitatibus! Et accusamus molestiae qui minima ipsum sed neque fuga qui omnis placeat. Et magni quibusdam ut magnam dolores sit eveniet veniam et voluptatibus similique!
          <br/>
          Et deleniti consequatur et alias nostrum in distinctio animi aut dolores tenetur sed voluptas voluptas. At voluptas quis aut laboriosam laudantium et illum quia qui dignissimos quisquam sit vero voluptatem.
          <br/>
          Et architecto dolorem et enim fugit eos cumque laudantium qui unde consequuntur. Aut eligendi culpa ad excepturi consequatur ad eaque soluta et mollitia sunt nam placeat perspiciatis. Ea ipsa expedita ut laborum sequi non odit similique ut maiores repellat est enim debitis vel repellat illo? Et modi ipsam non beatae expedita id voluptas voluptatibus aut omnis voluptatem ut omnis obcaecati.
        </p>
      </main>
    </div>
  )
}
