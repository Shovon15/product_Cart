/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { add, decrease, remove } from "../../store/cartSlice";
import { Card, CardBody, CardHeader, IconButton, Typography } from "@material-tailwind/react";

const CartPage = ({ cartOpen }) => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cartItem);

	const handleAdd = (product) => {
		dispatch(add(product));
	};
	// const productLength = products ? products.length : 0;

	const handleReduce = (product) => {
		dispatch(decrease(product));
	};
	const handleRemove = (product) => {
		dispatch(remove(product));
	};

	return (
		<div
			className={`${
				cartOpen ? "w-96 opacity-1" : "w-0 opacity-0 "
			}  ease-in-out duration-200 overflow-scroll flex flex-col gap-4 bg-blue-500 p-2`}
		>
			{products.map((product, i) => (
				<Card key={i} className="relative w-full max-w-[48rem] flex-row p-2 border-red-500">
					<button
						className="absolute top-2 right-2 z-10 rounded-full border-none bg-gray-100 p-2 focus:ring-0"
						onClick={() => handleRemove(product)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					<CardHeader shadow={false} floated={false} className="m-0 w-2/6 shrink-0 rounded-r-none">
						<img src={product.product_img} alt="card-image" className="w-24 object-cover" />
					</CardHeader>
					<CardBody className="p-2 ">
						<Typography variant="h4" color="blue-gray" className="mb-2">
							{product.title}
						</Typography>
						<div className="flex gap-2 justify-center items-center">
							<IconButton
								size="sm"
								variant="outlined"
								className="rounded-full border-gray-400 "
								onClick={() => handleReduce(product)}
								disabled={product.quantity > 1 ? false : true}
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
							<Typography variant="h6">{product?.quantity}</Typography>
							<IconButton
								size="sm"
								variant="outlined"
								className="rounded-full border-gray-400"
								onClick={() => handleAdd(product)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
								</svg>
							</IconButton>
						</div>
					</CardBody>
				</Card>
			))}
		</div>
	);
};

export default CartPage;

// <Card key={i} className="max-auto flex flex-row justify-between">
// 	<Button className="py-5 px-3" onClick={() => handleRemove(product.id)}>
// 		Remove
// 	</Button>
// 	<CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
// 		<img className="rounded-xl w-24" src={product.product_img} alt="..." />
// 	</CardHeader>
// 	<CardBody className="">
// 		<Typography variant="h4" color="blue-gray" className="mb-2">
// 			{product.id}
// 		</Typography>
// 		<Typography variant="h4" color="blue-gray" className="mb-2">
// 			Total Price:00
// 		</Typography>
// 	</CardBody>
// </Card>
