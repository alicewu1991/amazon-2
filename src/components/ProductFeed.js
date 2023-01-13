import Product from "./Product.js";

function ProductFeed({ products }) {
	return (
		//grid-flow-row-dense 把網格容器填滿
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
			{products &&
				products
					.slice(0, 4)
					.map(
						({ id, title, price, description, category, image, hasPrime }) => (
							<Product
								key={id}
								title={title}
								price={price}
								description={description}
								category={category}
								image={image}
							/>
						),
					)}
			{/* 頁面中的廣告 */}
			<img
				className="md:col-span-full"
				src="https://links.papareact.com/dyz"
				alt=""
			/>

			<div className="md:col-span-2 ">
				{products &&
					products
						.slice(4, 5)
						.map(({ id, title, price, description, category, image }) => (
							<Product
								key={id}
								title={title}
								price={price}
								description={description}
								category={category}
								image={image}
							/>
						))}
			</div>

			{products &&
				products
					.slice(5, products.length)
					.map(({ id, title, price, description, category, image }) => (
						<Product
							key={id}
							title={title}
							price={price}
							description={description}
							category={category}
							image={image}
						/>
					))}
		</div>
	);
}

export default ProductFeed;
