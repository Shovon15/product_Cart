/* eslint-disable react/prop-types */
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import CartPage from "../cart/CartPage";
import { useEffect, useRef, useState } from "react";

const AppNav = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const products = useSelector((state) => state.cartItem);
	const handleCart = () => {
		setCartOpen(!cartOpen);
		console.log(cartOpen);
	};

	// ---------for click outside menu close--------------------
	let menuRef = useRef();

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setCartOpen(false);
				console.log(menuRef.current);
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<Navbar
			ref={menuRef}
			style={{ backgroundColor: "#000" }}
			className="sticky top-0 z-50 mx-auto max-w-[1600px] px-12 py-6  rounded-none border-none "
		>
			<div className="flex items-center justify-between text-blue-gray-100">
				<Typography as="a" href="#" variant="h2" className="mr-4 cursor-pointer py-1.5">
					<span className="text-white">Product</span>
					<span className="text-green-700">Cart</span>
				</Typography>
				<div className="">
					<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
						<div className="static">
							{products?.length > 0 && (
								<span className="absolute  top-5 right-7 z-30 bg-red-500 rounded-full px-2 text-white border-4 border-black">
									{products.length}
								</span>
							)}
							<IconButton onClick={handleCart}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
									disabled={products.length > 0 ? false : true}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									/>
								</svg>
							</IconButton>
							{cartOpen && products.length !== 0 && (
								<div className="absolute top-[106px] right-0 w-80 md:w-96 h-screen">
									<CartPage />
								</div>
							)}
						</div>
					</ul>
				</div>
			</div>
		</Navbar>
	);
};

export default AppNav;
