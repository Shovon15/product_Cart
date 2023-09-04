/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip, Button } from "@material-tailwind/react";
import ProductButton from "../Button/ProductButton";
import CartButton from "../Button/CartButton";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";

const ProductCard = ({ item }) => {
	const { title, product_img, price } = item;

	const dispatch = useDispatch();
	const handleAdd = (product) => {
		dispatch(add(product));
		// console.log("hello");
	};
	return (
		<Card className=" realtive">
			<div className="absolute top-2 right-2 z-10">
				<CartButton onClick={() => handleAdd(item)}>Add to cart</CartButton>
			</div>
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
				<div className="text-end pt-3 ">
					<ProductButton className="w-full">Show more</ProductButton>
				</div>
			</CardBody>
		</Card>
	);
};

export default ProductCard;
