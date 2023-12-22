import { Container, Col, Row } from "react-bootstrap";
import partnersData from "../data/partners.json";

const PartnerSection = () => {
	return (
		<Container className="py-5 d-flex flex-column justify-content-center align-items-center">
			<h3 className="text-center display-6 mb-4">
				We are trusted by over 2000 Pharmacies
			</h3>
			<p className="text-center fs-4 mb-5">
				This is a testament to our reliability, and unmatched <br /> service in
				the pharmaceutical industry.
			</p>

			<div className="partners">
				<Row
					xs={3}
					lg={2}
					className="d-flex flex-wrap justify-content-center align-items-center "
				>
					{partnersData.map((partner, index) => (
						<Col xs={3} lg={2} className="me-1 my-3">
							<img
								key={index}
								src={partner.image}
								alt={partner.name}
								className="img-fluid"
								style={{ maxWidth: "100%", height: "auto" }}
							/>
						</Col>
					))}
				</Row>
			</div>

			<h2 className="text-center m-5 fs-4 fw-semibold pt-5">
				About WellaPartner
			</h2>
			<div>
				<iframe
					title="WellaPartner Video"
					className="img-fluid"
					src={`https://www.youtube.com/embed/7Y5InnfnqFc`}
					allowFullScreen
					style={{ width: "500px", height: "250px", borderRadius: "10px" }}
				></iframe>
			</div>
		</Container>
	);
};

export default PartnerSection;
