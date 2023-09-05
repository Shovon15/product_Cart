import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/product.json";

const ProductPage = () => {
	return (
		<div className="pt-5 px-5">
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-auto">
				{products.map((item, i) => (
					<ProductCard item={item} key={i} />
				))}
			</div>
		</div>
	);
};

export default ProductPage;
