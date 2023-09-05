/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { add, decrease, remove } from "../../store/cartSlice";
import { Card, CardBody, CardHeader, IconButton, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const CartPage = () => {
	const [totalCount, setTotalCount] = useState(0);
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cartItem);

	const handleAdd = (product) => {
		dispatch(add(product));
	};
	const handleReduce = (product) => {
		dispatch(decrease(product));
	};
	const handleRemove = (product) => {
		dispatch(remove(product));
	};
	// const productLength = products ? products.length : 0;

	const productPriceCount = (products) => {
		const totalPrice = products.reduce((total, product) => {
			return total + product.price * product.quantity;
		}, 0);

		setTotalCount(totalPrice);
	};
	useEffect(() => {
		productPriceCount(products);
	}, [products]);

	return (
		<div className="h-full bg-gray-300 pb-20">
			<div className="overflow-scroll overflow-x-hidden h-3/4 flex flex-col gap-1 p-4">
				{products.map((product, i) => (
					<Card key={i} className="relative w-full max-w-[48rem] flex-row p-2 border-red-500">
						<button
							className="absolute top-2 right-2 z-10 rounded-full border-none hover:ring-1 ring-gray-400 bg-gray-100 p-1 focus:ring-0"
							onClick={() => handleRemove(product)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						<CardHeader shadow={false} floated={false} className="m-0 w-2/6 shrink-0 rounded-r-none">
							<img src={product.product_img} alt="card-image" className="w-20 object-cover" />
						</CardHeader>
						<CardBody className="p-2 ">
							<Typography variant="h6" color="blue-gray" className="">
								{product.title}
							</Typography>
							<div className="flex gap-2 justify-center items-center">
								<IconButton
									size="sm"
									variant="outlined"
									className="rounded-full border-gray-400 text-black focus:ring-1"
									onClick={() => handleReduce(product)}
									disabled={product.quantity > 1 ? false : true}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-4 h-4"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
									</svg>
								</IconButton>
								<Typography variant="h6">{product?.quantity}</Typography>
								<IconButton
									size="sm"
									variant="outlined"
									className="rounded-full border-gray-400 text-black focus:ring-1"
									onClick={() => handleAdd(product)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-4 h-4 "
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
									</svg>
								</IconButton>
							</div>
						</CardBody>
					</Card>
				))}
			</div>
			<div className="flex flex-col justify-end p-4">
				<Typography className="text-black font-bold text-xl">
					Total selected Product: {products.length}{" "}
				</Typography>
				<Typography className="text-black font-bold text-xl">
					Total Price:$ <span className="text-2xl font-bold text-green-700">{totalCount}</span>
				</Typography>
			</div>
		</div>
	);
};

export default CartPage;
