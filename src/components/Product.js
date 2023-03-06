import Image from "next/dist/client/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

let name = "alice";
// print(name);
//最大值評分＆最小值評分
const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
	//發送對應的action到 Reducer
	const dispatch = useDispatch();

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

	//每當點擊購物籃添加項目時觸發
	const addItemToBasket = () => {
		const product = {
			id,
			title,
			price,
			description,
			category,
			image,
			hasPrime,
		};

		//將產品作為 action 發送到 redux store ... the basketＳlice action.payload
		dispatch(addToBasket(product));
	};
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
			<button onClick={addItemToBasket} className="mt-auto button">
				Add to Basket
			</button>
		</div>
	);
};

export default Product;
