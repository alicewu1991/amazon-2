import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import auth from "../../firebase";
import firebase from "firebase";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
	const signIn = async () => {
		auth
			.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var { displayName, email, Aa } = result.user;

				console.log("user", displayName, email, Aa);

				window.localStorage.setItem("user_name", displayName);
				window.localStorage.setItem("user_email", email);
				window.localStorage.setItem("user_token", Aa);

				window.localStorage.removeItem("user_name");

				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});

		return;
	};
	const router = useRouter();

	const items = useSelector(selectItems);
	//這裡的選擇項目指的是basketSlice

	return (
		<header>
			{/*Top nav*/}
			<div className=" bg-amazon_blue flex items-center p-1 flex-grow py-2">
				<div className=" flex items-center flex-grow sm:flex-grow-0 p-2">
					<Image
						onClick={() => router.push("/")}
						src="https://links.papareact.com/f90"
						width={150}
						height={40}
						objectfit="contain"
						className="cursor-pointer"
					/>
				</div>
				{/* Search */}
				<div className="hidden sm:flex items-center rounded-md h-10 flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
					<input
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
						type="text"
					/>
					<SearchIcon className="h-12 p-4" />
				</div>
				{/* Right */}
				<div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div onClick={signIn} className="cursor-pointer link">
						<p className="hover:underline">
							{" "}
							{signIn ? `Hello,${signIn.name}` : "Sing In"}
						</p>
						<p className="text-extrabold md:text-sm">Account & Lists</p>
					</div>
					<div className="link">
						<p>Returns</p>
						<p className="text-extrabold md:text-sm">& Orders</p>
					</div>
					<div
						onClick={() => router.push("/checkout")}
						className="relative link flex items-center"
					>
						<span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
							{items.length}
							{/* 這裡的items是購物車內容從0變動成新增的數量 */}
						</span>

						<ShoppingCartIcon className="h-10" />
						<p className="hiddle md:inline  text-extrabold md:text-sm mt-2">
							Basket
						</p>
					</div>
				</div>
			</div>

			{/* Bottom nav */}
			<div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
				<p className="link flex items-center">
					<MenuIcon className="h-6 mr-1" />
					All
				</p>
				<p className="link">Prime Video</p>
				<p className="link">Amazon Business</p>
				<p className="link">Today's Deals</p>
				<p className="link hidden lg:inline-flex">Electronics</p>
				<p className="link hidden lg:inline-flex">Food & Grocery</p>
				<p className="link hidden lg:inline-flex">Prime</p>
				<p className="link hidden lg:inline-flex">Buy Again</p>
				<p className="link hidden lg:inline-flex">Shopper Toolkit</p>
				<p className="link hidden lg:inline-flex">Health & Personal Care</p>
			</div>
		</header>
	);
}

export default Header;
