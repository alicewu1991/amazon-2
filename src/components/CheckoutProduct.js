import { CurrencyDollarIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/image";

function CheckoutProduct({
	id,
	title,
	price,
	description,
	category,
	image,
	hasPrime,
}) {
	return (
		<div>
			<div className="grid grid-cols-5">
				<Image src={image} height={200} width={200} object-contain />
				{/* Middle */}
				<div className="col-span-3 mx-5">
					<p>{title}</p>
					<div className="flex">
						{Array(rating)
							.fill()
							.map(_, (i) => (
								<StarIcon key={i} className="h-5 text-yellow-500" />
							))}
					</div>
					<p className="text-xs my-2 line-clamp-3">{description}</p>
					<Currency quantity={price} currency="GBP" />
					{hasPrime && (
						<div className="flex items-center space-x-2">
							<img
								src="https://links.papareact.com/fdw"
								alt="√prime"
								loading="lazy"
							/>
							<p className="text-xs text-gray-500">FREE Next-day Delivery</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default CheckoutProduct;
