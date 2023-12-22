import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const FAQComponent = () => {
	return (
		<Container
			fluid
			className="py-5 d-flex flex-column align-items-center mt-5 "
		>
			<h2 className="text-center fs-4 fw-semibold mb-4">
				Frequently Asked Questions
			</h2>
			<Container className="mt-5">
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Who owns wellapartner?</Accordion.Header>
						<Accordion.Body>
							Wellapartner is run by Wellahealth as one of their core products
							Wellapartner is run by Wellahealth as one of their core products.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>How can I subscribe to the plan</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>What is the cost of the plan</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>What is the cost of the plan</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Container>
		</Container>
	);
};

export default FAQComponent;
