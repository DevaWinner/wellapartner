import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/NavBar.css";

const NavBar = () => {
	return (
		<Navbar expand="lg" sticky="top">
			<Container>
				<Navbar.Brand>
					<NavLink to="/">
						<img src={logo} alt="logo" />
					</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto align-items-center">
						<Nav.Link as={NavLink} to="/">
							Products
						</Nav.Link>
						<Nav.Link as={NavLink} to="/testimonial">
							Testimonials
						</Nav.Link>
						<Nav.Link as={NavLink} to="/pricing">
							Pricing
						</Nav.Link>
						<button type="button" className="btn button mx-3">
							Get Started
						</button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
