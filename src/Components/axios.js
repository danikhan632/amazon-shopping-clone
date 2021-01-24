import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-fakeblock-shopping.cloudfunctions.net/api",
	//baseURL: "http://localhost:5001/fakeblock-shopping/us-central1/api",
});

export default instance;


