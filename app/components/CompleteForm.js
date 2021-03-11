import React, { Component } from 'react';
import history from './history';
import FunChart from './FunChart';
import {
  setPrice,
  setDownpayment,
  setAppreciation,
  setRentalIncome,
  setRent,
  setInterest,
  setOwnership1,
  setOwnership2,
  setOwnership3,
  setOwnership4,
  setOwnership5,
} from '../redux/reducer';
import { connect } from 'react-redux';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      rent: '500',
      numberOfBuyers: '',
      percentOwnership1: '',
      // percentOwnership2: '',
      // percentOwnership3: '',
      // percentOwnership4: '',
      // percentOwnership5: '',
      homePrice: '',
      homeDownpayment: '',
      homeAppreciation: '',
      homeInterest: '',
      rentalIncome: '',
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;

    // if (!this.state.NumberOfBuyers) {
    //   formIsValid = false;
    //   errors.NumberOfBuyers = 'Cannot be empty';
    // }

    // this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.handleValidation()) {
      this.props.setRent(this.state.rent);
      this.props.setPrice(this.state.homePrice);
      this.props.setDownpayment(this.state.homeDownpayment);
      this.props.setAppreciation(this.state.homeAppreciation);
      this.props.setRentalIncome(this.state.rentalIncome);
      this.props.setOwnership1(this.state.percentOwnership1);
      this.props.setInterest(this.state.homeInterest);
      // this.props.setOwnership2(this.state.percentOwnership2);
      // this.props.setOwnership3(this.state.percentOwnership3);
      // this.props.setOwnership4(this.state.percentOwnership4);
      // this.props.setOwnership5(this.state.percentOwnership5);
    }
  }

  render() {
    const {
      homePrice,
      homeDownpayment,
      homeAppreciation,
      rentalIncome,
      rent,
      percentOwnership1,
      homeInterest,
    } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <div>
          <h1>Please answer these questions</h1>
          {/* <Navbar /> */}
        </div>
        <div className='form-container'>
          <div className='card'>
            <form id='campus-form' onSubmit={handleSubmit}>
              <label className='form-label' htmlFor='rent'>
                How much is your rent ($)?
              </label>
              <input
                className='form-content'
                name='rent'
                onChange={handleChange}
                placeholder={this.state.errors.rent}
                value={rent || ''}
              />
              <label className='form-label' htmlFor='homePrice'>
                How much does your ideal home cost ($)?
              </label>
              <input
                className='form-content'
                name='homePrice'
                onChange={handleChange}
                // placeholder={this.state.errors.NumberOfBuyers}
                value={homePrice || ''}
              />
              <label className='form-label' htmlFor='homeDownpayment'>
                How much is your/groups expected downpayment ($) on the house?
              </label>
              <input
                className='form-content'
                name='homeDownpayment'
                onChange={handleChange}
                // placeholder={this.state.errors.NumberOfBuyers}
                value={homeDownpayment || ''}
              />
              <label className='form-label' htmlFor='homeInterest'>
                What is your expected interest rate (%) on the mortgage? ex:
                2.8%
              </label>
              <input
                className='form-content'
                name='homeInterest'
                onChange={handleChange}
                // placeholder={this.state.errors.NumberOfBuyers}
                value={homeInterest || ''}
              />
              <label className='form-label' htmlFor='homeAppreciation'>
                What is the average house appreciation (%) of the area? ex: 5%
              </label>
              <input
                className='form-content'
                name='homeAppreciation'
                onChange={handleChange}
                // placeholder={this.state.errors.NumberOfBuyers}
                value={homeAppreciation || ''}
              />
              <label className='form-label' htmlFor={`percentOwnership1`}>
                What percentage of the mortgage/downpayment/costs would you be
                responsible for? ex: 50%
              </label>
              <input
                className='form-content'
                name={`percentOwnership1`}
                onChange={handleChange}
                placeholder={this.state.errors.percentOwnership1}
                value={percentOwnership1 || ''}
              />
              <label className='form-label' htmlFor='rentalIncome'>
                If you were to have renters live with you how much would the
                combined rental income ($) be? ex: 800
              </label>
              <input
                className='form-content'
                name='rentalIncome'
                onChange={handleChange}
                // placeholder={this.state.errors.NumberOfBuyers}
                value={rentalIncome || ''}
              />
              <button type='submit' className='form-btn'>
                <div>Submit</div>
              </button>
            </form>
          </div>
          {/* {this.props.state.rent ? <FunChart /> : null} */}
          <FunChart defaultState={this.state} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { state };
};

const mapDispatch = (dispatch) => {
  return {
    setPrice: (num) => dispatch(setPrice(num)),
    setDownpayment: (num) => dispatch(setDownpayment(num)),
    setAppreciation: (num) => dispatch(setAppreciation(num)),
    setRentalIncome: (num) => dispatch(setRentalIncome(num)),
    setRent: (rent) => dispatch(setRent(rent)),
    setInterest: (int) => dispatch(setInterest(int)),
    setOwnership1: (num) => dispatch(setOwnership1(num)),
    setOwnership2: (num) => dispatch(setOwnership2(num)),
    setOwnership3: (num) => dispatch(setOwnership3(num)),
    setOwnership4: (num) => dispatch(setOwnership4(num)),
    setOwnership5: (num) => dispatch(setOwnership5(num)),
  };
};

export default connect(mapState, mapDispatch)(Form);
