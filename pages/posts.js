import Link from 'next/link';
import Head from 'next/head';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts page | Next course</title>
                <meta charSet="utf-8" />
                <meta name="description" content="This is basic next js project" />
            </Head>
            <h3>Posts page:</h3>
            <Link href='/post/5'>
                <a>Go to post number 5</a>
            </Link>
        </>
    )
}