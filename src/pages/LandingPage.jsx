import React from "react";
import ProductPage from "./pardoucts/ProductPage";
import CartPage from "./cart/CartPage";
import AppNav from "./shared/AppNav";

const LandingPage = () => {
	return (
		<div className="relative">
			<AppNav />
			<div className="flex w-full mt-28">
				<div className="w-3/4">
					<ProductPage />
				</div>
				<div className="w-1/4">
					<CartPage />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
