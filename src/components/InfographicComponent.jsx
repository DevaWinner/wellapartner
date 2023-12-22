import backgroundImage from "../assets/bg.svg";
import topImage from "../assets/dashboard.svg";

const InfographicComponent = () => {
	const containerStyle = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div style={containerStyle} className="px-5 py-4">
			<img src={topImage} alt="Top Image" className="img-fluid"/>
		</div>
	);
};

export default InfographicComponent;
    