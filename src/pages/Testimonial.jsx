import { Container } from "react-bootstrap";
import TestimonialCard from "../components/TestimonialCard";
import testimonialsData from "../data/testimonials.json";
import FAQComponent from "../components/FAQComponent";

const Testimonial = () => {
	return (
		<Container className="py-5 d-flex flex-column justify-content-center align-items-center">
			<h2 className="text-center mt-5 fs-4 fw-semibold pt-5">
				Our Wall of love
			</h2>
			<p className="text-center fs-5 mb-5">
				Read what our community members are saying about us
			</p>
			<div>
				<iframe
					title="WellaPartner Video"
					className="img-fluid mt-3"
					src={`https://www.youtube.com/embed/7Y5InnfnqFc`}
					allowFullScreen
					style={{ width: "500px", height: "250px", borderRadius: "10px" }}
				></iframe>
			</div>
			<TestimonialCard testimonials={testimonialsData} />
			<FAQComponent />
		</Container>
	);
};

export default Testimonial;
