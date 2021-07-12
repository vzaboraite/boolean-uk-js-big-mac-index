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

console.log(
  "Big Mac Indices of 5 countries compared to US Big Mac price of $5.66:"
);
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

//Challenge 1:
console.log("Compared indices: ");
console.log("Is first index is greater than next one?");
console.log("Countries compared: Lithuania and United Kingdom");
console.log(valueLTEur > valueUKGBP);

console.log("Countries compared: United Kingdom and Switzerland");
console.log(valueUKGBP > valueCHF);

console.log("Countries compared: Switzerland and Ukraine");
console.log(valueCHF > valueUAH);

console.log("Countries compared: Ukraine and Norway");
console.log(valueUAH > valueNOK);

console.log("Countries compared: Norway and Lithuania");
console.log(valueNOK > valueLTEur);

// Challenge 2:

// LT output
if (valueLTEur === 0) {
  console.log(
    "The index in Lithuania has the same or similar value as dollar in the US!"
  );
} else if (valueLTEur > 0) {
  console.log(
    "The euro in Lithuania was overvalued against the dollar in the US by " +
      valueLTEur.toFixed() +
      "%."
  );
} else {
  console.log(
    "The euro in Lithuania was undervalued against the dollar in the US by " +
      valueLTEur.toFixed() +
      "%."
  );
}

// UK output
if (valueUKGBP === 0) {
  console.log(
    "The index in United Kingdom has the same or similar value as dollar in the US!"
  );
} else if (valueUKGBP > 0) {
  console.log(
    "The pound in United Kingdom was overvalued against the dollar in the US by " +
      valueUKGBP.toFixed() +
      "%."
  );
} else {
  console.log(
    "The pound in United Kingdom was undervalued against the dollar in the US by " +
      valueUKGBP.toFixed() +
      "%."
  );
}

// Switzerland output
if (valueCHF === 0) {
  console.log(
    "The index in Switzerland has the same or similar value as dollar in the US!"
  );
} else if (valueCHF > 0) {
  console.log(
    "The frank in Switzerland was overvalued against the dollar in the US by " +
      valueCHF.toFixed() +
      "%."
  );
} else {
  console.log(
    "The frank in Switzerland was undervalued against the dollar in the US by " +
      valueCHF.toFixed() +
      "%."
  );
}

// Ukraine output
if (valueUAH === 0) {
  console.log(
    "The index in Ukraine has the same or similar value as dollar in the US!"
  );
} else if (valueUAH > 0) {
  console.log(
    "The hryvnia in Ukraine was overvalued against the dollar in the US by " +
      valueUAH.toFixed() +
      "%."
  );
} else {
  console.log(
    "The hryvnia in Ukraine was undervalued against the dollar in the US by " +
      valueUAH.toFixed() +
      "%."
  );
}

// Norway output
if (valueNOK === 0) {
  console.log(
    "The index in Norway has the same or similar value as dollar in the US!"
  );
} else if (valueNOK > 0) {
  console.log(
    "The krone in Norway was overvalued against the dollar in the US by " +
      valueNOK.toFixed() +
      "%."
  );
} else {
  console.log(
    "The krone in Norway was undervalued against the dollar in the US by " +
      valueNOK.toFixed() +
      "%."
  );
}
