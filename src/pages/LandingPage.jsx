import ProductPage from "./pardoucts/ProductPage";
import AppNav from "./shared/AppNav";

const LandingPage = () => {
	return (
		<div className="relative ">
			<AppNav />
			<ProductPage />
		</div>
	);
};

export default LandingPage;
