import Head from 'next/head'
import { useEffect, useState } from 'react';
import { User } from '../../Models/user';
import pageStyles from './victor.module.css'

export default function Home() {
  const [userName, setUserName] = useState("Victor Sanborn");
  const [apiUserInfo, setApiUserInfo] = useState<User>();

  useEffect(() => {
		fetch(`../../api/user-information/victor/WubalubaDubDub`)
			.then(function (response) {
				return response.json();
			})
			.then(function (data: User) {
        console.log(data);
				setApiUserInfo(data);
			})
			.catch(function (error) {
				console.log('Booo', error);
			});
	}, []);

  function clickTitle() {
    setUserName(oldVal => {
      return `${oldVal} (KingVirr)`;
    })
  }
  
  return (
    <div className="container">
      <Head>
        <title>Victors User Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={pageStyles.title} onClick={() => clickTitle()}>
         {userName}
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

        {/* <section>
          <p>API</p>
          <h1 className={pageStyles.title} onClick={() => clickTitle()}>
         { apiUserInfo.UserName} - {apiUserInfo.UserId}
        </h1>

        <p className={pageStyles.description}>
          {apiUserInfo.UserTitle}
        </p>

        <p className={pageStyles.infoSection}>
        {apiUserInfo.Information}
        </p>
        </section> */}
      </main>
    </div>
  )
}
