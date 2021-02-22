
import { useRouter } from 'next/router';

import { PrivatLayout } from '../../layout/privat-layout';

export default function Post() {
    const router = useRouter();

    return (
        <PrivatLayout>
            <h2>Post: {router.query.id}</h2>
        </PrivatLayout>
    )
}