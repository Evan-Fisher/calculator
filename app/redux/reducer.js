const initialState = {
  rent: '',
  numberOfBuyers: '',
  percentOwnership1: '',
  percentOwnership2: '',
  percentOwnership3: '',
  percentOwnership4: '',
  percentOwnership5: '',
  homePrice: '',
  homeDownpayment: '',
  homeAppreciation: '',
  homeInterest: '',
  rentalIncome: '',
};

const SET_RENT = 'SET_RENT';
const SET_BUYERS = 'SET_BUYERS';
const SET_OWNERSHIP1 = 'SET_OWNERSHIP1';
const SET_OWNERSHIP2 = 'SET_OWNERSHIP2';
const SET_OWNERSHIP3 = 'SET_OWNERSHIP3';
const SET_OWNERSHIP4 = 'SET_OWNERSHIP4';
const SET_OWNERSHIP5 = 'SET_OWNERSHIP5';
const SET_PRICE = 'SET_PRICE';
const SET_DOWNPAYMENT = 'SET_DOWNPAYMENT';
const SET_APPRECIATION = 'SET_APPRECIATION';
const SET_RENTAL_INCOME = 'SET_RENTAL_INCOME';
const SET_INTEREST = 'SET_INTEREST';

export const setRent = (rent) => ({ type: SET_RENT, rent });
export const setBuyers = (buyers) => ({ type: SET_BUYERS, buyers });
export const setOwnership1 = (ownership) => ({
  type: SET_OWNERSHIP1,
  ownership,
});
export const setOwnership2 = (ownership) => ({
  type: SET_OWNERSHIP2,
  ownership,
});
export const setOwnership3 = (ownership) => ({
  type: SET_OWNERSHIP3,
  ownership,
});
export const setOwnership4 = (ownership) => ({
  type: SET_OWNERSHIP4,
  ownership,
});
export const setOwnership5 = (ownership) => ({
  type: SET_OWNERSHIP5,
  ownership,
});
export const setPrice = (price) => ({ type: SET_PRICE, price });
export const setDownpayment = (dp) => ({ type: SET_DOWNPAYMENT, dp });
export const setAppreciation = (app) => ({ type: SET_APPRECIATION, app });
export const setRentalIncome = (amount) => ({
  type: SET_RENTAL_INCOME,
  amount,
});
export const setInterest = (int) => ({
  type: SET_INTEREST,
  int,
});

export default function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RENT:
      return { ...state, rent: action.rent };
    case SET_BUYERS:
      return { ...state, numberOfBuyers: action.buyers };
    case SET_OWNERSHIP1:
      return { ...state, percentOwnership1: action.ownership };
    case SET_OWNERSHIP2:
      return { ...state, percentOwnership2: action.ownership };
    case SET_OWNERSHIP3:
      return { ...state, percentOwnership3: action.ownership };
    case SET_OWNERSHIP4:
      return { ...state, percentOwnership4: action.ownership };
    case SET_OWNERSHIP5:
      return { ...state, percentOwnership5: action.ownership };
    case SET_PRICE:
      return { ...state, homePrice: action.price };
    case SET_DOWNPAYMENT:
      return { ...state, homeDownpayment: action.dp };
    case SET_APPRECIATION:
      return { ...state, homeAppreciation: action.app };
    case SET_RENTAL_INCOME:
      return { ...state, rentalIncome: action.amount };
    case SET_INTEREST:
      return { ...state, homeInterest: action.int };
    default:
      return state;
  }
}
