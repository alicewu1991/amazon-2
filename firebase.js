import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCMfxX4Uekx_oNUt8wAG4hSx88gN4idNWg",
	authDomain: "amaz-2-81fb1.firebaseapp.com",
	projectId: "amaz-2-81fb1",
	storageBucket: "amaz-2-81fb1.appspot.com",
	messagingSenderId: "778273243977",
	appId: "1:778273243977:web:f59515b9a3fd00b12c1098",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();

export default auth;
