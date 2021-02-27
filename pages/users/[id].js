
import { useRouter } from 'next/router';
import { Container, Row, Col, Badge, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import { API_BASE } from '../../services/api.service';
import { PrivatLayout } from '../../layout/privat-layout';

export default function User({ user }) {
    console.log('user: ', user);
    return (
        <PrivatLayout title="Post Page">
            <Container>
                <h1>Profile</h1>
                <Row className="d-flex mt-3">
                    <Col sm="12">
                        <div className="text-center">
                            <h1>{`${user.first_name} ${user.last_name}`}</h1>
                            <Badge className="p-2" pill color="info">Next.js developer</Badge>
                            <div className="my-4">
                                <img
                                    style={{ width: 250, height: 250 }}
                                    className="rounded-circle img-thumbnail"
                                    src={user.avatar}
                                    alt="profile"
                                />
                            </div>
                            <div className="text-dark w-50 m-auto">
                                <p>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsam laudantium, necessitatibus optio quaerat quasi velit. Adipisci eveniet facere reprehenderit? Accusamus accusantium culpa, esse facilis illo inventore magni quam ut.</span>
                                </p>
                                <hr />
                                <div className="my-4 d-flex justify-content-center">
                                    <Button
                                        outline
                                        color="warning"
                                        className="mr-2"
                                        style={{ borderRadius: '20px' }}
                                    >
                                        CONTACT ME
                                    </Button>
                                    <Button
                                        outline
                                        color="warning"
                                        className="mr-2 rounded-circle"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Button>
                                    <Button
                                        outline
                                        color="warning"
                                        className="rounded-circle"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </PrivatLayout>
    )
}

User.getInitialProps = async ({ query }) => {
    const { id } = query;
    const response = await fetch(`${API_BASE}/users/${id}`);
    const user = await response.json();

    return { user: user.data }
}