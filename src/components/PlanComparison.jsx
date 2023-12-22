import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import plansData from "../data/plansData.json";

const BenefitsComparisonComponent = () => {
	const allBenefits = plansData
		.reduce((acc, plan) => [...acc, ...plan.benefits], [])
		.filter((benefit) => !benefit.startsWith("Everything on"));

	const uniqueBenefits = [...new Set(allBenefits)];

	const doesPlanSupportBenefit = (plan, benefit) => {
		if (!plan || !plan.benefits) {
			return false;
		}

		if (plan.benefits.includes(benefit)) {
			return true;
		}

		const previousPlans = plansData.slice(0, plansData.indexOf(plan));
		return previousPlans.some((prevPlan) =>
			doesPlanSupportBenefit(prevPlan, benefit)
		);
	};

	return (
		<Container className="my-5 pt-5">
			<h3 className="text-center display-6 mb-2 fs-4 fw-semibold">
				Compare plans & features
			</h3>
			<p className="text-center fs-5">
				Overview of what's included in our different plans.
			</p>

			<Row className="mb-2 mt-3 pt-5">
				<Col xs={12} md={3}></Col>
				{plansData.map((plan, index) => (
					<Col key={index} xs={12} md={3} lg={2} className="mb-1 text-center">
						<h5 className="fs-5 fw-bold">{plan.title}</h5>
					</Col>
				))}
			</Row>

			<Row className="mb-2">
				<Col xs={12} md={3}></Col>
				{plansData.map((plan, index) => (
					<Col key={index} xs={12} md={3} lg={2} className="mb-1 text-center">
						<h5>{`N${plan.priceMonthly} / Month`}</h5>
					</Col>
				))}
			</Row>

			<Row className="mb-4">
				<Col xs={12} md={3}></Col>
				{plansData.map((plan, index) => (
					<Col key={index} xs={12} md={3} lg={2} className="mb-1 text-center">
						<Button
							variant="outline-primary mx-3 px-3 py-2 fw-bold fs-6"
							className="mt-auto"
							style={{
								backgroundColor: "#3EAF3F",
								color: "#fff",
								border: "none",
							}}
						>
							Get Started
						</Button>
					</Col>
				))}
			</Row>

			{uniqueBenefits.map((benefit, index) => (
				<Row key={index} className="mb-3">
					<Col xs={12} md={3}>
						<h5>{benefit}</h5>
					</Col>
					{plansData.map((plan, index) => (
						<Col key={index} xs={12} md={3} lg={2} className="mb-1 text-center">
							{doesPlanSupportBenefit(plan, benefit) ? "✔" : "✘"}
						</Col>
					))}
				</Row>
			))}
		</Container>
	);
};

export default BenefitsComparisonComponent;
