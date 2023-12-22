import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import plansData from "../data/plansData.json";

const PricingComponent = () => {
	const [isYearly, setIsYearly] = useState(false);

	const plans = plansData.map((plan, index) => ({
		...plan,
		price: isYearly ? plan.priceYearly * plan.discount : plan.priceMonthly,
		stars: index === 0 ? 2 : index + 3, // Adjusted the stars based on the index
	}));

	const handleToggle = () => {
		setIsYearly(!isYearly);
	};

	const renderPlan = (plan, index) => (
		<Col key={index} xs={12} md={6} lg={3} className="mb-4 d-flex">
			<div
				className="card pb-3 pricing d-flex flex-column h-100 w-100"
				{...(plan.isHighlighted && {
					style: { backgroundColor: "#033", color: "#fff" },
				})}
			>
				<div className="card-body flex-grow-1">
					<div className="mb-4 d-flex align-items-center">
						{Array(plan.stars)
							.fill()
							.map((_, i) => (
								<span key={i} className="material-symbols-outlined star_icon">
									star
								</span>
							))}
						{plan.isHighlighted && (
							<span className="most-popular-label rounded-pill fw-bold">Most Popular</span>
						)}
					</div>
					<p className="card-title fw-bold mb-4">{plan.title.toUpperCase()}</p>
					<p className="card-price fs-5 fw-bold mb-0">
						{`N${plan.price}  `}
						<span
							className={`fw-light ${
								plan.isHighlighted ? "text-white" : "text-black-50"
							}`}
						>
							/{` ${isYearly ? "year" : "month"} `}
						</span>
					</p>
					<span className={plan.isHighlighted ? "text-white" : "text-black-50"}>
						Billed {`${isYearly ? "yearly" : "monthly"} `}
					</span>

					<p className=" mt-4 mb-2">What's included</p>
					<ul className="list-unstyled flex-grow-1">
						{plan.benefits.map((benefit, i) => (
							<li key={i} className="d-flex align-items-start">
								<span className="material-symbols-outlined d-block">
									check_small
								</span>
								{benefit}
							</li>
						))}
					</ul>
				</div>
				<Button
					variant="outline-primary mx-3 px-4 py-2 fs-5"
					className="mt-auto"
					style={{ backgroundColor: "#3EAF3F", color: "#fff", border: "none" }}
				>
					Get {plan.title.split(" ")[1]}
				</Button>
			</div>
		</Col>
	);

	return (
		<Container className="mt-5">
			<h3 className="text-center display-6 mb-2 fs-4 fw-bold">Pricing</h3>
			<p className="text-center fs-5 mb-4">
				Choose a plan that suits your needs and embark on a <br /> journey of
				seamless, efficient solutions tailored just for you.
			</p>

			<div className="d-flex align-items-center justify-content-center gap-3 mb-5 pb-5">
				<p
					className={`mb-0 fw-bold ${
						!isYearly ? "text-success" : "text-secondary"
					}`}
				>
					Monthly
				</p>
				<Form className="text-center">
					<Form.Check
						type="switch"
						id="custom-switch"
						label=""
						checked={isYearly}
						onChange={handleToggle}
					/>
				</Form>
				<p
					className={`mb-0 fw-bold ${
						isYearly ? "text-success" : "text-secondary"
					}`}
				>
					Yearly
					<span className="savings p-2 mx-2 rounded-pill">Save up to 25%</span>
				</p>
			</div>

			<Row>{plans.map(renderPlan)}</Row>
		</Container>
	);
};

export default PricingComponent;
