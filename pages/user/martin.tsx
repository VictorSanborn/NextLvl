import Head from 'next/head'
import { useEffect, useState } from 'react';
import { User } from '../../Models/user';
import pageStyles from './martin.module.css'

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
        <title>Martins User Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={pageStyles.title} onClick={() => clickTitle()}>
         {/* {userName} */}MartinB
        </h1>

        <p className={pageStyles.description}>
          is learning nextJS right now ...
        </p>

        <p className={pageStyles.infoSection}>
        Next.js wird als das React-Framework für die Produktion bezeichnet. Damit ist klar, dass du mit Next.js schnell große und unternehmenstaugliche Anwendungen erstellen und in der Produktion einsetzen kannst.
Next.js verfügt über Funktionen, mit denen du deine Anwendung in kürzester Zeit zum Laufen bringen kannst, und bietet dir eine leicht zu erlernende Kurve, Einfachheit und leistungsstarke Werkzeuge.
</p>
<p className={pageStyles.infoSection}>
          Next.js erweitert die ursprüngliche Facebook React-Bibliothek und das create-react-app-Paket und stellt ein erweiterbares, einfach zu verwendendes und produktionssicheres React-Framework bereit.
          </p>
          <p className={pageStyles.infoSection}>
          In diesem Leitfaden lernst du Next.js kennen und erfährst, warum du Next.js einsetzen solltest und welche verschiedenen Anwendungen Next.js in der Produktion verwenden. Außerdem besprechen wir die Elemente von Next.js, einschließlich seiner Funktionen. Zum Schluss lernen wir, wie wir unsere erste Next.js-Anwendung erstellen können.
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
