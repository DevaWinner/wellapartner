import { Container, Row, Col, Button } from "react-bootstrap";

const ManagementComponent = () => {
	const offerings = [
		{
			icon: "src/assets/icons/FirstAid.svg",
			title: "MEDICATION GROUP PURCHASE",
			description:
				"Get financing for medication purchase though our medication bulk purchase arrangement for partner pharmacies. ",
		},
		{
			icon: "src/assets/icons/hands.svg",
			title: "BUSINESS SUPPORT & STAFF TRAINING",
			description:
				"Get access to business support materials and opportunites as well as training to boost your staff efficiency",
		},
		{
			icon: "src/assets/icons/customer.svg",
			title: "MARKETING SUPPORT",
			description:
				"Get support for better community engagement through digital and physical channels.",
		},
		{
			icon: "src/assets/icons/Books.svg",
			title: "INVENTORY INSIGHTS",
			description:
				"Leverage pharmacy business data for your business planning from wellahealth's inventory and business database.",
		},
		{
			icon: "src/assets/icons/AddressBook.svg",
			title: "LISTING ON WELLAPARTNER PLATFORM",
			description:
				"Gain visibility to the wider health system and access opportunities by being a part of the wellahealth network.",
		},
		{
			icon: "src/assets/icons/Coins.svg",
			title: "SECURE BUSINESS LOANS",
			description:
				"Our loans provide the financial foundation you need to expand your services, and enhance your overall pharmacy experience.",
		},
	];

	return (
		<Container
			fluid
			className="development_container py-5 d-flex flex-column align-items-center"
		>
			<p className="text-center fs-4 mb-2">
				Continuous Support <span className="fs-4 fw-bold">for</span>
			</p>
			<h2 className="text-center fs-4 fw-semibold mb-4">
				Business development
			</h2>
			<img
				src="src/assets/development.svg"
				alt="Stats image"
				className="img-fluid"
			/>

			<Container className="mb-3">
				<Row className="justify-content-center">
					<Col lg={6}>
						<p className="text-center fs-4 mt-2">
							Whether you are a startup or an established company, having the
							right support can make a significant difference
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
							<div className="d-flex align-items-center gap-1 my-3">
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
