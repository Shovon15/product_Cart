import { useState } from "react";
import ProductPage from "./pardoucts/ProductPage";
import CartPage from "./cart/CartPage";
import AppNav from "./shared/AppNav";

const LandingPage = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const handleCart = () => {
		setCartOpen(!cartOpen);
		console.log(cartOpen);
	};

	return (
		<div className="relative ">
			<AppNav handleCart={handleCart} />
			<ProductPage />
			<CartPage cartOpen={cartOpen} />
		</div>
	);
};

export default LandingPage;
