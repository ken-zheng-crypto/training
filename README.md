# training


1、get btc price 

<img width="697" alt="截屏2022-07-06 21 26 20" src="https://user-images.githubusercontent.com/104058212/177561002-eb8c7c33-68a7-4262-86e6-931b6025f2d9.png">



2、Write data to a smart contract、read data， use ethers.js

    cd training/assignment2/scripts

    npm install ethers

    npm install axios

    node report_weather.js  your_private_key


outputs : 

<img width="1164" alt="截屏2022-07-06 21 04 42" src="https://user-images.githubusercontent.com/104058212/177561491-c19fe86d-e399-4626-a954-9e1582a82a46.png">



Additional Task : https://github.com/ken-zheng-crypto/training/blob/main/assignment2/additional_task.txt

3、 multicall smart contract function

   use makerdao multicall  aggregate, 
   
   1、use remix deploy multicall contract : training/assignment2/contracts/Multicall.sol
   
     https://testnet.cronoscan.com/address/0x3e6A08EbF49937f07a2d9fAeCC2beFbDcD58c503

   2、use @makerdao/multical.js  aggregate call, script : training/assignment2/scripts/readWeatherMulticall.js
   
   test:

   npm install @makerdao/multicall

   node readWeatherMulticall.js

   outputs:
   <img width="668" alt="截屏2022-07-06 21 32 04" src="https://user-images.githubusercontent.com/104058212/177562392-80c50128-d456-4cfd-922c-388717e99d14.png">

