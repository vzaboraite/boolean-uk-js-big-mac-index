/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

// Big Mac Index by the example above
const basePrice = 3.57; //USD
const priceGBP = 2.29;
let ippGBP = basePrice / priceGBP; // here ipp - implied purchasing power
const actualExchangeRateGBP = 2;
const valueGBP =
  ((actualExchangeRateGBP - ippGBP.toFixed(2)) / ippGBP.toFixed(2)) * 100; // percents
console.log(valueGBP.toFixed() + "%"); // 28%

// Big Mac Index of 5 other countries today
const basePriceUSD = 5.66;

// Lithuania
const priceLTEur = 2.8;
const ippLTEur = basePriceUSD / priceLTEur;
const actualCurrencyExchangeRateEur = 1.19; // €1 = $1.19
const valueLTEur =
  ((actualCurrencyExchangeRateEur - ippLTEur.toFixed(2)) /
    ippLTEur.toFixed(2)) *
  100;
console.log(valueLTEur.toFixed() + "%"); // -41%

// United Kingdom
const priceUKGBP = 3.19;
const ippUKGBP = basePriceUSD / priceUKGBP;
const actualCurrencyExchangeRateGBP = 1.39; // £1 = $1.39
const valueUKGBP =
  ((actualCurrencyExchangeRateGBP - ippUKGBP.toFixed(2)) /
    ippUKGBP.toFixed(2)) *
  100;
console.log(valueUKGBP.toFixed() + "%"); // -21%

// Switzerland
const priceCHF = 6.5;
const ippCHF = basePriceUSD / priceCHF;
const actualCurrencyExchangeRateCHF = 1.09; // 1 swiss frank = $1.09
const valueCHF =
  ((actualCurrencyExchangeRateCHF - ippCHF.toFixed(2)) / ippCHF.toFixed(2)) *
  100;
console.log(valueCHF.toFixed() + "%"); // 25%

// Ukraine
const priceUAH = 62;
const ippUAH = basePriceUSD / priceUAH;
const actualCurrencyExchangeRateUAH = 0.037; // 1UAH = $0.037
const valueUAH =
  ((actualCurrencyExchangeRateUAH - ippUAH.toFixed(2)) / ippUAH.toFixed(2)) *
  100;
console.log(valueUAH.toFixed() + "%"); // -59%

// Norway
const priceNOK = 52;
const ippNOK = basePriceUSD / priceNOK;
const actualCurrencyExchangeRateNOK = 0.11; // 1NOK = $0.11
const valueNOK =
  ((actualCurrencyExchangeRateNOK - ippNOK.toFixed(2)) / ippNOK.toFixed(2)) *
  100;
console.log(valueNOK.toFixed() + "%"); // 0%
