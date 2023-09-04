import { Button } from "@material-tailwind/react";

const ProductButton = ({ onClick, children, className }) => {
	return (
		<Button
			onClick={onClick}
			className={`${className} bg-white ring-1 focus:ring-1 hover:bg-green-500 focus:ring-green-500 text-black ring-green-500 px-8 py-3`}
		>
			{children}
		</Button>
	);
};

export default ProductButton;
