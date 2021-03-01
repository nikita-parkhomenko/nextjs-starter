
import Link from 'next/link';
import {
    Col, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Card
} from 'reactstrap';

export default function EmployeeCard(employee) {
    return (
        <Col xs="12" md="6" lg="4">
            <Card>
                <CardImg top width="100" src={employee.avatar} alt="Card image cap" />
                <CardBody className="d-flex flex-column align-items-center">
                    <Link href="/employee/[id]" as={`/employee/${employee.id}`}>
                        <a style={{ fontSize: '22px' }} className="text-primary" >
                            <CardTitle>
                                {`${employee.first_name} ${employee.last_name}`}
                            </CardTitle>
                        </a>
                    </Link>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{employee.email}</CardSubtitle>
                    <CardText className="text-center">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button>Уволить</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
