export const display = (results) => {
  for (key in results) {
    console.log(results[key]);
  }
};

export const homeValue = (price, app, years) => {
  let val = Math.floor(price * (1 + app) ** years);
  return val;
};

export const calculateRentalLoss = (rent) => {
  let obj = {};
  for (let i = 0; i < 5; i++) {
    obj[i] = Math.floor(-rent * 12 * 1.03 ** i);
  }
  return obj;
};

export const LoanAmount = (price, dp, interest, term) => {
  let int = interest / 12;
  let monthlyMortgage =
    (price - dp) *
    ((int * (1 + int) ** (term * 12)) / ((1 + int) ** (term * 12) - 1));
  return monthlyMortgage;
};
