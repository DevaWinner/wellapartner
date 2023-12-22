import HeroCTA from "../components/HeroCTA";
import InfographicComponent from "../components/InfographicComponent";
import PartnerSection from "../components/PartnerSection";
import SalesComponent from "../components/SalesComponent";
import ManagementComponent from "../components/ManagementComponent";
import DevelopmentComponent from "../components/DevelopmentComponent";
import FAQComponent from "../components/FAQComponent";

const Home = () => {
	return (
		<>
			<HeroCTA />
			<InfographicComponent />
			<PartnerSection />
			<SalesComponent />
			<ManagementComponent />
			<DevelopmentComponent />
			<FAQComponent />
		</>
	);
};

export default Home;
