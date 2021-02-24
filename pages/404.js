
import Link from 'next/link';

import classes from '../styles/error.module.css';

export default function ErrorPage() {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Error 404</h1>
            <p>Please go back to
                <Link href="/"><a> home page</a></Link>
            </p>
        </div>
    )
}
