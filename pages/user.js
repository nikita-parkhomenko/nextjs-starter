
import { Badge, Container } from 'reactstrap';
import { PrivatLayout } from '../layout/privat-layout';

export async function getStaticProps() {
    const resp = await fetch('https://api.github.com/users/nikita-parkhomenko');
    const user = await resp.json();

    return {
        props: { user }
    };
}

export default function User ({ user }) {
    return (
        <PrivatLayout>
            <Container className="d-flex flex-column align-items-center" >
                <div className="my-4">
                    <img
                        style={{ width: 200, height: 200 }}
                        className="rounded-circle img-thumbnail"
                        src={user.avatar_url}
                        alt="profile"
                    />
                </div>
                <h1>Hello, {user.name}</h1>
                <Badge className="p-2 mb-2" pill color="info">{user.bio}</Badge>
                <p>Company: {user.company}</p>
            </Container>
        </PrivatLayout>
    )
}
