import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TestimonialCard = ({ testimonials }) => {
	return (
		<Container className="mt-5 d-flex align-items-center justify-content-center">
			<div>

				<Row xs={1} md={2} lg={4} className="g-4">
					{testimonials.map((testimonial) => (
						<Col key={testimonial.id}>
							<Card className="bs-secondary-bg p-2">
								<Card.Body>
									<Card.Text>{testimonial.testimony}</Card.Text>
									<p className="fw-bold mb-0">{testimonial.name}</p>
									<p className="mb-0">{`${testimonial.city}, ${testimonial.country}`}</p>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
};

export default TestimonialCard;
