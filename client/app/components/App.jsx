import React from 'react';

import Button from './Button.jsx';
import Compass from './Compass.jsx';
import Search from './Search.jsx';
import Coords from './Coords.jsx';
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
        <p>What do you<br />want to eat?</p>
        <Compass heading={this.state.heading} />
        <Coords
          location={this.state.currCoords}
          count={this.state.localeUpdateCount}
          err={this.state.err}
        />
        <Search onInput={this.handleSearchInput} />
        <Button handleClick={this.handleGoClick} />
      </div>
    );
  }
}

export default App;
