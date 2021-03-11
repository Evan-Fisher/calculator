import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { calculateRentalLoss } from '../calculationFunctions';

class FunChart extends React.Component {
  render() {
    let { rent } = this.props.state;
    if (!this.props.state.rent) {
      rent = calculateRentalLoss(this.props.defaultState.rent);
    }
    const rentData = [
      { year: 1, loss: rent[0] },
      { year: 2, loss: rent[1] },
      { year: 3, loss: rent[2] },
      { year: 4, loss: rent[3] },
      { year: 5, loss: rent[4] },
    ];
    // const gainData = [
    //   { year: 1, gain: 5000 },
    //   { year: 2, gain: 6000 },
    //   { year: 3, gain: 7000 },
    //   { year: 4, gain: 8000 },
    //   { year: 5, gain: 9000 },
    // ];
    return (
      <VictoryChart
        domainPadding={20}
        theme={{
          axis: {
            style: {
              axis: {
                stroke: 'yellow',
              },
              tickLabels: {
                fill: 'blue',
              },
              grid: {
                fill: 'none',
                stroke: 'none',
              },
            },
          },
          bar: {
            style: {
              data: {
                fill: 'green',
              },
            },
          },
        }}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5']}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryBar
          data={rentData}
          // data accessor for x values
          x='year'
          // data accessor for y values
          y='loss'
        />
        {/* <VictoryBar
          data={gainData}
          // data accessor for x values
          x='year'
          // data accessor for y values
          y='gain'
        /> */}
      </VictoryChart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(FunChart);
