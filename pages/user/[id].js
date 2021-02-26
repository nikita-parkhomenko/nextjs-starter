
import { useRouter } from 'next/router';

import UserCard from '../../layout/user-card';
import { API_BASE } from '../../services/api.service';
import { PrivatLayout } from '../../layout/privat-layout';

export default function User({ user }) {
    const router = useRouter();

    return (
        <PrivatLayout title="Post Page">
            <UserCard user={user.data} />
        </PrivatLayout>
    )
}

User.getInitialProps = async ({ query }) => {
    const { id } = query;
    const response = await fetch(`${API_BASE}/users/${id}`);
    const user = await response.json();

    return { user }
}