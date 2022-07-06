const ethers = require('ethers');
const axios = require('axios');

const args = process.argv.slice(2)
const privateKey = args[0];

if (privateKey == null) {
	throw new Error("privateKey is mandatory");
}

let contractAddress = "0x49354813d8BFCa86f778DfF4120ad80E4D96D74E";


let abi = [
	"function reportWeather(uint32 batchId, bytes32 cityName, uint32 temperature) external",
	"function getWeather(uint32 batchId, bytes32 cityName) public view returns (uint32)"
];

let url = "https://evm-t3.cronos.org";
let provider = new ethers.providers.JsonRpcProvider(url);

let contract = new ethers.Contract(contractAddress, abi, provider);

let wallet = new ethers.Wallet(privateKey, provider);

let contractWithSigner = contract.connect(wallet);


let batchId = Math.round(Math.random() * 100000000);

let weatherUrl = "https://goweather.herokuapp.com/weather/";

let cityNameArr = ["shanghai", "hongkong", "london"];



async function getCityWeatherFromContract(cityName) {
	let temperature = await contractWithSigner.getWeather(batchId, ethers.utils.formatBytes32String(cityName));
	console.log("read weather from contract : this cityName is %s , temperature is %s", cityName, temperature);
}

async function reportWeather(cityName, temperature) {
	let tx = await contractWithSigner.reportWeather(batchId, ethers.utils.formatBytes32String(cityName), temperature);
	console.log("report weather to contract: this cityName is %s, temperature is : %s, Txn Hash is %s", cityName, temperature, tx.hash);
	await tx.wait();
}


async function getCityWeatherTemperature(cityName) {
	let temperature = null;
	let response = await axios.get(weatherUrl + cityName);
	if (response.status == 200) {
		let data = response.data;
		console.log("The %s weather is %s", cityName, data);
		temperature = parseInt((response.data.temperature || '').match(/\d+/g)[0]);
	} else {
		console.log("The %s weather request error: %s", cityName, response);

	}
	return temperature;

}


async function run() {
	for (let i = 0; i < cityNameArr.length; i++) {
		let temperature = getCityWeatherTemperature(cityNameArr[i]);
		if (temperature != null) {
			await reportWeather(cityNameArr[i], temperature);
			getCityWeatherFromContract(cityNameArr[i]);
		}

	}
}


run();