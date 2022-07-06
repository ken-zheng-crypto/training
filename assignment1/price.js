async function getPrice(){
		
    let contractAddress = "0xb3DF0a9582361db08EC100bd5d8CB70fa8579f4B";

    let abi = [
        "function latestAnswer() external view returns (int256)"
    ];

    let url = "https://evm-cronos.crypto.org";
    let provider = new ethers.providers.JsonRpcProvider(url);

    let contract = new ethers.Contract(contractAddress, abi, provider);

    let currentValue =  await contract.latestAnswer();

    console.log(currentValue);

    document.getElementById("price_id").innerHTML = currentValue/10e8;
}

getPrice();