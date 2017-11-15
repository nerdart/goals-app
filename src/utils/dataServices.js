import axios from 'axios';
const BASE_API = "http://localhost:3000/";

export const currentWeek =() => {
	return axios.get(`${BASE_API}week`)
	.then(function (response){
		console.log(response);
		return response;

	})
}