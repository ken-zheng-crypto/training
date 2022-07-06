		const ethers = require('ethers');
		const {aggregate} = require('@makerdao/multicall');


		let contractAddress = "0x3e6A08EbF49937f07a2d9fAeCC2beFbDcD58c503";

		let url = "https://evm-t3.cronos.org";

		let batchId = 69763364;

		let cityNameArr= ["shanghai","hongkong","london"];


		// The JSON RPC URL and multicall contract address can also be specified in the config:
	    const config = {
	      rpcUrl: url,
	      multicallAddress: contractAddress,
	    };


	    (async () => {

	      	const aggregateCall = aggregate(
			      [
				        {
				          call: ['getWeather(uint32,bytes32)(uint32)', batchId,ethers.utils.formatBytes32String(cityNameArr[0])],
				          returns: [[cityNameArr[0]+'_temperature']]
				        },
				        {
				          call: ['getWeather(uint32,bytes32)(uint32)', batchId,ethers.utils.formatBytes32String(cityNameArr[0])],
				          returns: [[cityNameArr[1]+'_temperature']]
				        },
				        {
				          call: ['getWeather(uint32,bytes32)(uint32)', batchId,ethers.utils.formatBytes32String(cityNameArr[0])],
				          returns: [[cityNameArr[2]+'_temperature']]
				        }
				      ],
				      config
		    	);
	      		let result = await aggregateCall;
				console.log(result.results.transformed);

	    })();