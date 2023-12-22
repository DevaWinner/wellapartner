import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import FooterComponent from "./components/FooterComponent";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Testimonial from "./pages/Testimonial";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/testimonial" element={<Testimonial />} />
				</Routes>
			</main>
			<footer>
				<FooterComponent />
			</footer>
		</>
	);
}

export default App;
