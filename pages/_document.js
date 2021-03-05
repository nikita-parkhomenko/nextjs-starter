
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
    This page is important to extend your basic HTML
    The <Head /> component used here is not the same one from next/head.
    Here Head should only be used for any <head> code that is common for all pages.
 */

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="This is basic next js project" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
