import React, { Component } from 'react';
import history from './history';
// import {
//   setPrice,
//   setDownpayment,
//   setAppreciation,
//   setRentalIncome,
// } from '../redux/reducer';
import { connect } from 'react-redux';
import FunChart from './FunChart';

export class Results extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  // handleValidation() {
  //   let errors = {};
  //   let formIsValid = true;

  //   // if (!this.state.NumberOfBuyers) {
  //   //   formIsValid = false;
  //   //   errors.NumberOfBuyers = 'Cannot be empty';
  //   // }

  //   // this.setState({ errors: errors });
  //   return formIsValid;
  // }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.handleValidation()) {
      this.props.setPrice(this.state.HomePrice);
      this.props.setDownpayment(this.state.HomeDownpayment);
      this.props.setAppreciation(this.state.HomeAppreciation);
      this.props.setRentalIncome(this.state.RentalIncome);
      history.push('/');
    }
  }

  render() {
    // const {
    //   HomePrice,
    //   HomeDownpayment,
    //   HomeAppreciation,
    //   RentalIncome,
    // } = this.state;
    let rent = this.props.rentalLoss;
    let years = [0, 1, 2, 3, 4];
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <div>
          <h1>Here are your results</h1>
          {/* <Navbar /> */}
        </div>
        <div className='form-container'>
          <div className='card'>
            <div>
              {years.map((key) => {
                return (
                  <div key={key}>
                    <div>{`year ${key + 1} rental loss`}</div>
                    <div>{rent[key]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <FunChart />
      </div>
    );
  }
}

function display(results) {
  for (key in results) {
    console.log(results[key]);
  }
}

const calculateRentalLoss = (rent) => {
  let obj = {};
  for (let i = 0; i < 5; i++) {
    obj[i] = Math.floor(rent * 12 * 1.03 ** i);
  }
  return obj;
};

// functions to calculate the results
function LoanAmount(price, dp, interest, term) {
  let int = interest / 12;
  let monthlyMortgage =
    (price - dp) *
    ((int * (1 + int) ** (term * 12)) / ((1 + int) ** (term * 12) - 1));
  return monthlyMortgage;
}

function homeValue(price, app, years) {
  let val = Math.floor(price * (1 + app) ** years);
  return val;
}

const mapStateToProps = (state) => {
  return {
    rentalLoss: calculateRentalLoss(state.rent),
  };
};

const mapDispatch = (dispatch) => {
  return {
    setPrice: (num) => dispatch(setPrice(num)),
    setDownpayment: (num) => dispatch(setDownpayment(num)),
    setAppreciation: (num) => dispatch(setAppreciation(num)),
    setRentalIncome: (num) => dispatch(setRentalIncome(num)),
  };
};

export default connect(mapStateToProps, mapDispatch)(Results);
