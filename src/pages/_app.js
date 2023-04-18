import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react"; //身份授權 給整個應用程序訪問下一個身份驗證狀態
import { GoogleAnalytics } from "nextjs-google-analytics";

const MyApp = ({ Component, pageProps, session }) => {
	return (
		<SessionProvider session={session}>
			<GoogleAnalytics />
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</SessionProvider>
	);
};

export default MyApp;
