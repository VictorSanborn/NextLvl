import Head from 'next/head'
import { useEffect, useState } from 'react';
import { User } from '../../Models/user';
import pageStyles from './camilla.module.css'

export default function Home() {
  const [userName, setUserName] = useState("Camilla");
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
          My spicy page
        </p>

        <p className={pageStyles.infoSection}>
        Spicy jalapeno bacon ipsum dolor amet strip steak shank biltong chicken tenderloin chislic porchetta ham hock corned beef pancetta brisket tongue ham jowl. Salami shoulder pancetta filet mignon pig hamburger strip steak. T-bone short loin buffalo prosciutto tongue meatball.
          <br/>
          Flank strip steak meatball ham hock, landjaeger alcatra tri-tip bacon sirloin turducken chislic chuck salami beef pig. Rump drumstick tri-tip, ball tip salami tenderloin cow jerky biltong brisket frankfurter chicken. 
          <br/>
          Buffalo turkey brisket ribeye short loin short ribs porchetta pork picanha. Salami ham hock shank cow beef ribs shoulder tongue turkey doner andouille.
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
