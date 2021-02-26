
import Head from 'next/head';
import { Row, Col } from 'reactstrap';

// Components
import { Header } from './header';
import { SideBar } from './side-bar';

export function PrivatLayout({ children, title = 'App Title | Next course' }) {
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head>
            <Header />
            <Row>
                {/*<Col sm="2">*/}
                {/*    <SideBar />*/}
                {/*</Col>*/}
                <Col sm="12">
                    <main className="m-4">
                        {children}
                    </main>
                </Col>
            </Row>
        </>
    )
}