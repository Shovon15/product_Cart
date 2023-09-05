/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const ProductButton = ({ onClick, children, className }) => {
	return (
		<Button onClick={onClick} className={`${className} bg-green-500 px-8 text-black`}>
			{children}
		</Button>
	);
};

export default ProductButton;
