import Link from 'next/link';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserTie, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons'

export function SideBar() {
    return (
        <div>
            <h3 className="m-3">Primary</h3>
            <ListGroup flush>
                <Link href="/users">
                    <a className="pointer" >
                        <ListGroupItem className="border-0" >
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                            Users
                        </ListGroupItem>
                    </a>
                </Link>
                <Link href="/employees">
                    <a className="pointer" >
                        <ListGroupItem className="border-0" >
                            <FontAwesomeIcon className="mr-2" icon={faUserTie} />
                            Employees
                        </ListGroupItem>
                    </a>
                </Link>
                <Link href="/dashboard">
                    <a className="pointer" >
                        <ListGroupItem className="border-0" >
                            <FontAwesomeIcon className="mr-2" icon={faChartLine} />
                            Dashboard
                        </ListGroupItem>
                    </a>
                </Link>
                <Link href="/setting">
                    <a className="pointer" >
                        <ListGroupItem className="border-0" >
                            <FontAwesomeIcon className="mr-2" icon={faCogs} />
                            Setting
                        </ListGroupItem>
                    </a>
                </Link>
            </ListGroup>
            <h3 className="m-3">Secondary</h3>
            <ListGroup flush>
                <Link href="/users">
                    <a className="pointer" >
                        <ListGroupItem className="border-0" >
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                            Users
                        </ListGroupItem>
                    </a>
                </Link>
                <Link href="/employees">
                    <a className="pointer" >
                        <ListGroupItem className="border-0" >
                            <FontAwesomeIcon className="mr-2" icon={faUserTie} />
                            Employees
                        </ListGroupItem>
                    </a>
                </Link>
                <Link href="/dashboard">
                    <a className="pointer" >
                        <ListGroupItem className="border-0" >
                            <FontAwesomeIcon className="mr-2" icon={faChartLine} />
                            Dashboard
                        </ListGroupItem>
                    </a>
                </Link>
                <Link href="/setting">
                    <a className="pointer" >
                        <ListGroupItem className="border-0" >
                            <FontAwesomeIcon className="mr-2" icon={faCogs} />
                            Setting
                        </ListGroupItem>
                    </a>
                </Link>
            </ListGroup>
        </div>
    );
}