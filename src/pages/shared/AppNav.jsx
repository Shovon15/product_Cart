/* eslint-disable react/prop-types */
import React from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

function NavList({ handleCart }) {
	const products = useSelector((state) => state.cartItem);

	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<div className="static">
				{products?.length > 0 ? (
					<span className="absolute  top-5 right-7 z-30 bg-red-500 rounded-full px-2 text-white border-4 border-black">
						{products.length}
					</span>
				) : (
					""
				)}
				<IconButton onClick={handleCart}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
						/>
					</svg>
				</IconButton>
			</div>
		</ul>
	);
}

const AppNav = ({ handleCart }) => {
	const [openNav, setOpenNav] = React.useState(false);

	const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

	React.useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);
	return (
		<Navbar
			style={{ backgroundColor: "#000" }}
			className="fixed top-0 z-20 mx-auto max-w-[1600px] px-12 py-6  rounded-none border-none "
		>
			<div className="flex items-center justify-between text-blue-gray-100">
				<Typography as="a" href="#" variant="h2" className="mr-4 cursor-pointer py-1.5">
					<span className="text-orange-700">Good</span>
					<span className="text-white">Site</span>
				</Typography>
				<div className="hidden lg:block">
					<NavList handleCart={handleCart} />
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon className="h-6 w-6" strokeWidth={2} />
					) : (
						<Bars3Icon className="h-6 w-6" strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList handleCart={handleCart} />
			</Collapse>
		</Navbar>
	);
};

export default AppNav;
