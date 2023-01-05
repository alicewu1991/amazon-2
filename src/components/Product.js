import Image from "next/dist/client/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

//最大值評分＆最小值評分
const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
	//隨機五星評分
	const rating =
		Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;

	const [ratingArray, setRatingArray] = useState([]);

	const [hasPrime, setHasPrime] = useState(false);

	useEffect(() => {
		setRatingArray(Array(rating).fill(0));
		if (rating > 4) {
			setHasPrime(true);
		}
	}, []);

	return (
		<div className="relative flex flex-col m-5 bg-white z-30 p-10" key={id}>
			{/* 類別 */}
			<p className="absolute top-2 right-2 text-xs italic text-gray-400">
				{category}
			</p>
			<Image src={image} height={200} width={200} />
			<h4 className="my-3">{title}</h4>
			<div className="flex">
				{ratingArray.map((_, i) => (
					<StarIcon key={i} className="h-5 text-yellow-500" />
				))}
			</div>

			{/*商品敘述*/}
			<p className="text-xs my-2 line-clamp-2">{description}</p>
			{/* 顯示貨幣金額 */}
			<div className="mb-5">
				<Currency quantity={price} currency="GBP" />
			</div>
			<div
				className={`flex items-center space-x-2 -mt-5 ${!hasPrime && "hidden"}`}
			>
				<img className="w-12" src="https://links.papareact.com/fdw" alt="" />
				<p className="text-xs text-gray-500">FREE Next-day Delivery</p>
			</div>
			<button className="mt-auto botton">Add to Basket</button>
		</div>
	);
};

export default Product;
