/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
	Button,
	IconButton,
} from "@material-tailwind/react";
import ProductButton from "../Button/ProductButton";
import CartButton from "../Button/CartButton";
import { useDispatch, useSelector } from "react-redux";
import { add, decrease } from "../../store/cartSlice";

const ProductCard = ({ item }) => {
	const { id, title, product_img, price } = item;

	const dispatch = useDispatch();
	const products = useSelector((state) => state.cartItem);
	const handleAdd = (product) => {
		dispatch(add(product));
	};
	const handleReduce = (product) => {
		dispatch(decrease(product));
	};

	let quantity = 0;
	const isProductAvailable = products.some((product) => product.id === id);

	if (isProductAvailable) {
		const product = products.find((product) => product.id === id);
		quantity = product ? product.quantity : 0;
	}
	return (
		<Card>
			<CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
				<img className="rounded-xl" src={product_img} alt="..." />
			</CardHeader>
			<CardBody className="">
				<div className="flex justify-between">
					<Typography variant="h4" color="blue-gray" className="mb-2">
						{title}
					</Typography>
					<Typography variant="h4" color="green" className="mb-2 ">
						${price}
					</Typography>
				</div>
				<Typography color="blue-gray" className="font-medium" textGradient>
					CEO / Co-Founder
				</Typography>
				<div className="text-center pt-3 ">
					{isProductAvailable ? (
						<div className="flex  justify-center items-center ">
							<IconButton
								size="md"
								variant="outlined"
								className="rounded-l-full  bg-green-500 text-white
								ring-1 ring-green-500 focus:ring-1 focus:ring-green-500  border-l-0 border-t-0 border-b-0 border-r-1 border-gray-300 "
								onClick={() => handleReduce(item)}
								disabled={quantity > 1 ? false : true}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
								</svg>
							</IconButton>
							<Typography variant="h6" className="bg-green-500 px-8 py-2 text-white">
								{quantity}
							</Typography>
							<IconButton
								size="md"
								variant="outlined"
								className="rounded-r-full  bg-green-500 text-white
								ring-1 ring-green-500 focus:ring-1 focus:ring-green-500  border-l-1 border-t-0 border-b-0 border-r-0 border-gray-300 "
								onClick={() => handleAdd(item)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 "
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
								</svg>
							</IconButton>
						</div>
					) : (
						<ProductButton onClick={() => handleAdd(item)}>Add to Cart</ProductButton>
					)}
				</div>
			</CardBody>
		</Card>
	);
};

export default ProductCard;
