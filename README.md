# training


1、get btc price 

<img width="697" alt="截屏2022-07-06 21 26 20" src="https://user-images.githubusercontent.com/104058212/177561002-eb8c7c33-68a7-4262-86e6-931b6025f2d9.png">



2、Write data to a smart contract、read data， use ethers.js

    cd training/assignment2/scripts

    npm install ethers

    npm install axios

    node report_weather.js  your_private_key


outputs : 

    <img width="1164" alt="截屏2022-07-06 21 04 42" src="https://user-images.githubusercontent.com/104058212/177561260-ce5d4bb5-e5ef-42d4-a7fd-f9059c6915b8.png">



3、 multicall smart contract function

   use makerdao multicall  aggregate, 
   
   1、use remix deploy multicall contract : training/assignment2/contracts/Multicall.sol

   2、use @makerdao/multical.js  aggregate call, script : training/assignment2/scripts/readWeatherMulticall.js
   
   
