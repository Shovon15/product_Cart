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
		<div className="relative">
			<AppNav handleCart={handleCart} />
			<div className="flex w-full mt-28">
				<div className="">
					<ProductPage />
				</div>
				<div>
					<CartPage cartOpen={cartOpen} />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
