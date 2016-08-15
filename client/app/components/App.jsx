import React from 'react';

import Button from './Button.jsx';
import Search from './Search.jsx';
import Results from './Results.jsx';
import Load from './Load.jsx';
import Yelp from './Yelp.jsx';
// import ErrorMsg from './ErrorMsg.jsx';
// import Coords from './dev_components/Coords.jsx';
import helpers from '../helpers';
import services from '../services';

import testData from './dev_components/testdata.js';

import '../css/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleGoClick = this.handleGoClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);

    this.state = {
      currCoords: {},
      localeUpdateCount: 0,
      errorMsg: '',
      deviceHeading: 0,
      compassHeading: 0,
      showResults: false,
      buttonText: 'GO',
      foodData: testData,
      loading: false,
    };
  }

  componentDidMount() {
    helpers.watchGeolocation((err, position) => {
      if (err) {
        console.error(err);
        this.setState({ errorMsg: 'No GPS data. Check GPS settings.' });
      } else {
        this.setState({
          errorMsg: '',
          currCoords: position.coords,
          localeUpdateCount: this.state.localeUpdateCount += 1,
        });
      }
    });

    helpers.getCompassHeading((err, heading) => {
      if (err) {
        console.error('Error with compass', err);
        this.setState({ errorMsg: 'Error with compass' });
      } else {
        this.setState({
          errorMsg: '',
          compassHeading: heading,
        });
      }
    });
  }

  handleGoClick() {
    this.setState({ showResults: !this.state.showResults }, () => {
      if (this.state.showResults) {
        this.setState({ loading: true, errorMsg: '' });
        services.searchYelp(
          this.state.food,
          this.state.currCoords.latitude,
          this.state.currCoords.longitude
        )
        .then((results) => {
          console.log(results);
          this.setState({
            errorMsg: '',
            loading: false,
            foodData: results.businesses[0],
          });
        })
        .catch(err => {
          console.error('Yelp search error', err);
          this.setState({
            errorMsg: 'Error with Yelp server. Please try again.',
          });
        });
      }
    });
  }

  handleSearchInput(e) {
    this.setState({ food: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>foodigi</h1>
        { this.state.loading
          ? <Load />
          :
          (<div>
            { this.state.showResults
              ? <Results
                compassHeading={this.state.compassHeading}
                foodData={this.state.foodData}
                origin={this.state.currCoords}
                foodQuery={this.state.food}
              />
              :
              (<div>
                <p className="question">What do you<br />want to eat?</p>
                <Search onInput={this.handleSearchInput} />
              </div>
              )
            }
            <Button
              handleClick={this.handleGoClick}
              text={this.state.showResults ? 'BACK' : 'GO'}
            />
          </div>)
        }
        <Yelp />
      </div>
    );
  }
}

export default App;
