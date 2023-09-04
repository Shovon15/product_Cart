/* eslint-disable no-undef */

import { Button } from "@material-tailwind/react";
import React from "react";

const CartButton = ({ onClick, children, className }) => {
	return (
		<Button variant="outlined" onClick={onClick} className={`${className} bg-green-500 border-none`}>
			{children}
		</Button>
	);
};

export default CartButton;
