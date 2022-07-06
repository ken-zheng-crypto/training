# training


get btc price 

<img width="697" alt="截屏2022-07-06 21 26 20" src="https://user-images.githubusercontent.com/104058212/177561002-eb8c7c33-68a7-4262-86e6-931b6025f2d9.png">



1、Write data to a smart contract、read data， use ethers.js

    cd training/assignment2/scripts

    npm install ethers

    npm install axios

    node report_weather.js  your_private_key


outputs : 

    kenzheng@CNMAC0563 scripts % node reportWeather.js 2b44dd6debf30bd93f34ff128d48f9e48e14dd840bc60bbe457fbef431dc9fd8
    The shanghai weather is {
    temperature: '+33 °C',
    wind: '22 km/h',
    description: 'Clear',
    forecast: [Array]
    }
    report weather to contract: this cityName is shanghai, temperature is : Promise { 33 }, Txn Hash is 0x40c84211fc18a7c08e3f9711d0af36c4c100b653174c5679ba1f4075e7fdda23
    read weather from contract : this cityName is shanghai , temperature is 33
    The hongkong weather is {
    temperature: '+28 °C',
    wind: '15 km/h',
    description: 'Partly cloudy',
    forecast: [Array]
    }
    report weather to contract: this cityName is hongkong, temperature is : Promise { 28 }, Txn Hash is 0x649dc20651ec46b0db97ab01a2089d221ef007372f5d2a931e4a32691c259c11
    read weather from contract : this cityName is hongkong , temperature is 28
    The london weather is {
    temperature: '+22 °C',
    wind: '13 km/h',
    description: 'Partly cloudy',
    forecast: [Array]
    }
    report weather to contract: this cityName is london, temperature is : Promise { 22 }, Txn Hash is 0xfa4d5b8dc75d59fce7ae2ff72692bba16b40a633447f44f7bb4f3655b1950175
    read weather from contract : this cityName is london , temperature is 22



2、 multicall smart contract function

   use makerdao multicall  aggregate, 
   
   1、use remix deploy multicall contract : training/assignment2/contracts/Multicall.sol

   2、use @makerdao/multical.js  aggregate call, script : training/assignment2/scripts/readWeatherMulticall.js
