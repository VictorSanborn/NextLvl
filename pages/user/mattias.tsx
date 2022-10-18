import Head from 'next/head'
import { useEffect, useState } from 'react';
import { User } from '../../Models/user';
import pageStyles from './mattias.module.css'

export default function Home() {
    const [userName, setUserName] = useState("Mattias Eriksson");
    const [apiUserInfo, setApiUserInfo] = useState<User>(new User);

    useEffect(() => {
        fetch(`../../api/user-information/mattias/WubalubaDubDub`)
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
            return `${oldVal} : )`;
        })
    }

    return (
        <div className="container">
            <Head>
                <title>Mattias User Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section>
                    <p>API</p>
                    <h1 className={pageStyles.title} onClick={() => clickTitle()}>
                        {apiUserInfo.UserName} - {apiUserInfo.UserId}
                    </h1>

                    <p className={pageStyles.description}>
                        {apiUserInfo.UserTitle}
                    </p>

                    <p className={pageStyles.infoSection}>
                        {apiUserInfo.Information}
                    </p>
                </section>
            </main>
        </div>
    )
}
