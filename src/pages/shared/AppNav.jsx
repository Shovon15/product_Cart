import React from "react";
import { Navbar, Collapse, Typography, IconButton, Badge } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

function NavList() {
	const products = useSelector((state) => state.cartItem);
	// console.log(products.length, ".length");
	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			{/* <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
				<a href="#" className="flex items-center text-white hover:text-orange-700 text-lg">
					Pages
				</a>
			</Typography>
			<Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
				<a href="#" className="flex items-center text-white hover:text-orange-700 text-lg">
					Account
				</a>
			</Typography>
			<Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
				<a href="#" className="flex items-center text-white hover:text-orange-700 text-lg">
					Blocks
				</a>
			</Typography> */}
			<Badge color="red" content={products?.length}>
				<IconButton>
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
			</Badge>
		</ul>
	);
}

const AppNav = () => {
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
					<NavList />
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
				<NavList />
			</Collapse>
		</Navbar>
	);
};

export default AppNav;
