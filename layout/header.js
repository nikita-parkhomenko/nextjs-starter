import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartLine, faCogs, faUserCircle, faUserTie} from '@fortawesome/free-solid-svg-icons'

import {
    Nav,
    Navbar,
    NavItem,
    NavbarBrand,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
} from 'reactstrap';

export function Header() {
    return (
        <div className="pb-5 mb-2">
            <Navbar style={{ height: 60 }} color="dark" dark expand="md" fixed="top">
                <NavbarBrand href="/">
                    <img
                        alt="company logo"
                        src="https://media-exp1.licdn.com/dms/image/C4E0BAQFCvE5py1YmEw/company-logo_200_200/0/1524059602944?e=1622073600&v=beta&t=AbLtckJXWKtZ7B3ZPh5TObmxHbsbwQqlI7AzquJFqrg"
                        width="32"
                        height="32"
                        className="d-inline-block align-top"
                    />{' '}
                    <Link href="/">
                        <a className="text-white f" tag="a">
                            Intelliceed
                        </a>
                    </Link>
                </NavbarBrand>
                <Nav className="ml-4 d-flex align-items-center" navbar>
                    <Link href="/users">
                        <a className="pointer" >
                            <NavItem className="border-0 mr-4" >
                                <FontAwesomeIcon className="mr-2" icon={faUserTie} />
                                Employees
                            </NavItem>
                        </a>
                    </Link>
                    <Link href="/dashboard">
                        <a className="pointer" >
                            <NavItem className="border-0 mr-4" >
                                <FontAwesomeIcon className="mr-2" icon={faChartLine} />
                                Dashboard
                            </NavItem>
                        </a>
                    </Link>
                    <Link href="/setting">
                        <a className="pointer" >
                            <NavItem className="border-0 mr-4" >
                                <FontAwesomeIcon className="mr-2" icon={faCogs} />
                                Setting
                            </NavItem>
                        </a>
                    </Link>
                </Nav>
                <UncontrolledDropdown className="ml-auto" inNavbar>
                    <DropdownToggle nav caret>
                        <FontAwesomeIcon icon={faUserCircle} size="lg" className={"mr-2"} />
                        Niki Park
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <Link href="/user/[id]" as="/user/2" >
                                <a>Profile</a>
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            Setting
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            LogOut
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

            </Navbar>
        </div>
    );
}
