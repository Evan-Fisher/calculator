import React, { Component } from 'react';
import history from './history';
import {
  setOwnership1,
  setOwnership2,
  setOwnership3,
  setOwnership4,
  setOwnership5,
} from '../redux/reducer';
import { connect } from 'react-redux';

export class GroupForm extends Component {
  constructor() {
    super();
    this.state = {
      percentOwnership1: '',
      percentOwnership2: '',
      percentOwnership3: '',
      percentOwnership4: '',
      percentOwnership5: '',
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

    if (!this.state.percentOwnership1) {
      formIsValid = false;
      errors.NumberOfBuyers = 'Cannot be empty';
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.handleValidation()) {
      this.props.setOwnership1(this.state.percentOwnership1);
      this.props.setOwnership2(this.state.percentOwnership2);
      this.props.setOwnership3(this.state.percentOwnership3);
      this.props.setOwnership4(this.state.percentOwnership4);
      this.props.setOwnership5(this.state.percentOwnership5);
      history.push('/house');
    }
  }

  render() {
    const {
      percentOwnership1,
      percentOwnership2,
      percentOwnership3,
      percentOwnership4,
      percentOwnership5,
    } = this.state;
    const arrOfOwners = [
      percentOwnership1,
      percentOwnership2,
      percentOwnership3,
      percentOwnership4,
      percentOwnership5,
    ];
    const numberOfBuyers = this.props.numberOfBuyers;
    let arr = [];
    for (let i = 0; i < numberOfBuyers; i++) {
      arr.push(i);
    }
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <div>
          <h1>
            What percentage of ownership would you like each owner to have?
          </h1>
          {/* <Navbar /> */}
        </div>
        <div className='form-container'>
          <div className='card'>
            <form id='campus-form' onSubmit={handleSubmit}>
              {arr.map((num, indx) => (
                <div key={indx}>
                  <label
                    className='form-label'
                    htmlFor={`percentOwnership${indx + 1}`}
                  >
                    {`Buyer ${indx + 1}`}
                  </label>
                  <input
                    className='form-content'
                    name={`percentOwnership${indx + 1}`}
                    onChange={handleChange}
                    placeholder={this.state.errors.percentOwnership1}
                    value={arrOfOwners[indx] || ''}
                  />
                </div>
              ))}
              <button type='submit' className='form-btn'>
                <div>Submit</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    numberOfBuyers: state.numberOfBuyers,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setOwnership1: (num) => dispatch(setOwnership1(num)),
    setOwnership2: (num) => dispatch(setOwnership2(num)),
    setOwnership3: (num) => dispatch(setOwnership3(num)),
    setOwnership4: (num) => dispatch(setOwnership4(num)),
    setOwnership5: (num) => dispatch(setOwnership5(num)),
  };
};

export default connect(mapState, mapDispatch)(GroupForm);
