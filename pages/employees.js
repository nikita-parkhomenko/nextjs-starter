
import { Container, Row } from 'reactstrap';

import { API_BASE } from '../services/api.service';
import { PrivatLayout } from '../layout/privat-layout';

// Components
import EmployeeCard from '../components/employee-card';

export async function getStaticProps() {
    const response = await fetch(`${API_BASE}/users`);
    const employees = await response.json();

    return {
        props: { employees }
    }
}

export default function Employees({ employees }) {
    return (
        <PrivatLayout title="Employees Page">
            <Container>
                <h1 className="mb-4">Employees Page</h1>
                <Row>
                    {employees.data.map(employee => (
                        <EmployeeCard key={employee.id} {...employee} />
                    ))}
                </Row>
            </Container>
        </PrivatLayout>
    )
}
