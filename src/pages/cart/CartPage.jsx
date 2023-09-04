import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/cartSlice";
import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const CartPage = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cartItem);

	const productLength = products ? products.length : 0;
	const handleRemove = (productId) => {
		console.log(productId, "productId");
		dispatch(remove(productId));
	};

	return (
		<div className="bg-green-500 p-5 flex flex-col gap-3 h-screen overflow-scroll">
			{products.map((product, i) => (
				<Card key={i} className="max-auto flex flex-row justify-between">
					<Button className="py-5 px-3" onClick={() => handleRemove(product.id)}>
						Remove
					</Button>
					<CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
						<img className="rounded-xl w-24" src={product.product_img} alt="..." />
					</CardHeader>
					<CardBody className="">
						<Typography variant="h4" color="blue-gray" className="mb-2">
							{product.id}
						</Typography>
					</CardBody>
				</Card>
			))}
		</div>
	);
};

export default CartPage;
