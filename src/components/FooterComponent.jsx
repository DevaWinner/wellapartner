import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logobw.svg";

const FooterComponent = () => {
	return (
		<footer className="bg-dark text-light py-3 mt-5">
			<Container>
				<Row className="align-items-center text-center text-lg-start">
					<Col xs={12} lg={3} className="mb-3 mb-lg-0">
						<img src={logo} alt="Logo" className="img-fluid" />
					</Col>

					<Col xs={12} lg={9}>
						<Row className="justify-content-center justify-content-lg-end">
							<Col xs={6} lg={3} className="mb-2">
								<p className="mb-0">contact@wellahealth.com</p>
							</Col>
							<Col xs={6} lg={3} className="mb-2">
								<p className="mb-0">+2349087482264</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default FooterComponent;
