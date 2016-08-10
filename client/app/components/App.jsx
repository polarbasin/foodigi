import React from 'react';

import Button from './Button.jsx';
import Search from './Search.jsx';
import Results from './Results.jsx';
import Coords from './dev_components/Coords.jsx';
import helpers from '../helpers';
import services from '../services';

import '../css/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleGoClick = this.handleGoClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);

    this.state = {
      currCoords: {},
      localeUpdateCount: 0,
      err: { message: '' },
      heading: 270,
      showResults: false,
      buttonText: 'GO',
    };
  }

  componentDidMount() {
    helpers.watchGeolocation((err, position) => {
      if (err) {
        console.error(err);
        this.setState({ err });
      } else {
        this.setState({
          currCoords: position.coords,
          localeUpdateCount: this.state.localeUpdateCount += 1,
        });
      }
    });

    helpers.getDeviceHeading((err, heading) => {
      this.setState({ heading });
    });
  }

  handleGoClick() {
    this.setState({ showResults: !this.state.showResults });
    services.searchYelp(
      this.state.food,
      this.state.currCoords.latitude,
      this.state.currCoords.longitude
    );
    // loading pacifier?
  }

  handleSearchInput(e) {
    this.setState({ food: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>foodigi</h1>
        <Coords
          location={this.state.currCoords}
          count={this.state.localeUpdateCount}
          err={this.state.err}
        />
        { this.state.showResults
          ? <Results
            heading={this.state.heading}
          />
          :
          (<div>
            <p>What do you<br />want to eat?</p>
            <Search onInput={this.handleSearchInput} />
          </div>
          )
        }
        <Button
          handleClick={this.handleGoClick}
          text={this.state.showResults ? 'BACK' : 'GO'}
        />
      </div>
    );
  }
}

export default App;
