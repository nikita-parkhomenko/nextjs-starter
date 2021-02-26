
import { Container, Row } from 'reactstrap';
import { PrivatLayout } from '../layout/privat-layout';
import { API_BASE } from '../services/api.service';

// Components
import UserCard from '../layout/user-card';

export default function Users({ users }) {
    console.log(users);
    return (
        <PrivatLayout title="Users Page">
            <Container>
                <h1 className="mb-4">Users Page</h1>
                <Row>
                    {users.data.map(user => (
                        <UserCard key={user.id} {...user} />
                    ))}
                </Row>
            </Container>
        </PrivatLayout>
    )
}

Users.getInitialProps = async () => {
    const response = await fetch(`${API_BASE}/users`);
    const users = await response.json();

    return { users }
}
