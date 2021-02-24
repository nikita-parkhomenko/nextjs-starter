
import Head from 'next/head';

import { Header } from './header';

export function PrivatLayout({ children, title = 'App Title | Next course' }) {
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head>
            <Header />
            <main>
                { children }
            </main>
            <style jsx global >{`
                nav {
                    position: fixed;
                    height: 50px;
                    left: 0;
                    right: 0;
                    top: 0;
                    background: lightblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center
                }
                nav a {
                    color: #fff;
                    text-decoration: none;
                }
                main {
                  margin: 50px;
                  padding: 10px;
                }
            `}</style>
        </>
    )
}