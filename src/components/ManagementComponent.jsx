import { Container, Row, Col, Button } from "react-bootstrap";

const ManagementComponent = () => {
	const offerings = [
		{
			icon: "src/assets/icons/GooglePlayLogo.svg",
			title: "WELLAPARTNER APP ACCESS",
			description:
				"Get access to wellapartner app & enjoy smooth fulfilment & payment flow for wellahealth requests",
		},
		{
			icon: "src/assets/icons/patient.svg",
			title: "PATIENT RECORDS TRACKING",
			description:
				"Keep track of data for your walk-in patients and leverage that for better and effective patient  engagement.",
		},
		{
			icon: "src/assets/icons/Airplay.svg",
			title: "CHRONICARE DASHBOARD",
			description:
				"Monitor your chronic disease patients effectively with our easy to use patient dashboard and improve care outcomes.",
		},
		{
			icon: "src/assets/icons/MaskHappy.svg",
			title: "AUTOMATED PATIENT FOLLOW UP",
			description:
				"Automate your patient follow up process and boost customer satisfaction and retention.",
		},
		{
			icon: "src/assets/icons/ChatCircleText.svg",
			title: "BULK SMS",
			description:
				"Engage your pool of clients with discounts, freebies and new product information using via sms.",
		},
		{
			icon: "src/assets/icons/patient.svg",
			title: "PATIENT ACCESS TO TELEMEDICINE",
			description:
				"Give your clients access to telemedicine offerings right from your pharmacy premise and improve client satisfaction.",
		},
	];

	return (
		<Container
			fluid
			className="management_container py-5 d-flex flex-column align-items-center"
		>
			<p className="text-center fs-4 mb-2">Better Patient </p>
			<h2 className="text-center fs-4 fw-semibold mb-4">Management & Care</h2>
			<img
				src="src/assets/management.svg"
				alt="Stats image"
				className="img-fluid"
			/>

			<Container className="mb-3">
				<Row className="justify-content-center">
					<Col lg={6}>
						<p className="text-center fs-4 mt-2">
							Our platform has redefined the way you interact with patients,
							ensuring a seamless, personalized, and efficient experience.
						</p>
					</Col>
				</Row>
			</Container>

			<Button variant="none" className="px-4 py-2 d-flex gap-3 mb-5">
				<span className="fs-5">Get Started</span>
				<span className="material-symbols-outlined fs-2">arrow_forward</span>
			</Button>

			<Container className="m-5">
				<Row className="justify-content-center">
					{offerings.map((offering, index) => (
						<Col
							key={index}
							xs={12}
							lg={4}
							className={`mb-${
								index === offerings.length - 1 ? "0" : "5"
							} text-center`}
						>
							<div className="d-flex align-items-center gap-3 my-3">
								<img src={offering.icon} alt="" />
								<p className="fw-bold m-0">{offering.title}</p>
							</div>

							<p className="text-start">{offering.description}</p>
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	);
};

export default ManagementComponent;
