// These styles will apply to all pages and components in application.
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import { wrapper } from '../store/store'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
// wrap App with redux
export default wrapper.withRedux(MyApp);
