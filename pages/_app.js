// These styles will apply to all pages and components in application.
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}