
import { Container, Row, Col, Badge, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import { API_BASE } from '../../services/api.service';
import { PrivatLayout } from '../../layout/privat-layout';

// this function gets called at build time
export async function getStaticPaths() {
    // call an externa api to get employees
    const response = await fetch(`${API_BASE}/users`);
    const employees = await response.json();
    // get the paths we want to pre-render based on employees
    const paths = employees.data.map((employee) => ({
            // id must be a string type only
            params: { id: employee.id.toString() }
        })
    )
    // we'll pre-render only these paths at build time
    // { fallback: false } means other routs should return 404
    return { paths, fallback: false }
}
// this also get called at build time
export async function getStaticProps({ params }) {
    // params contain the employee 'id'
    const response = await fetch(`${API_BASE}/users/${params.id}`);
    const employee = await response.json();
    // pass employee data to the page via props
    return {
        props: { employee: employee.data }
    }
}

export default function Employee({ employee }) {
    return (
        <PrivatLayout title="Employee Page">
            <Container>
                <h1>Profile</h1>
                <Row className="d-flex mt-3">
                    <Col sm="12">
                        <div className="text-center">
                            <h1>{`${employee.first_name} ${employee.last_name}`}</h1>
                            <Badge className="p-2" pill color="info">Next.js developer</Badge>
                            <div className="my-4">
                                <img
                                    style={{ width: 250, height: 250 }}
                                    className="rounded-circle img-thumbnail"
                                    src={employee.avatar}
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
