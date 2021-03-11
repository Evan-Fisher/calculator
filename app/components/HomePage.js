import React from 'react';
import Form from './CompleteForm';
import RentForm from './RentForm';
import FunChart from './FunChart';

const HomePage = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <main>
        <h2>Welcome to the renting vs. buying calc!!!!</h2>
        <Form />
        {/* <RentForm /> */}
      </main>
    </div>
  );
};

export default HomePage;
