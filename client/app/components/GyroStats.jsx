import React from 'react';
import GyroNorm from '../../../node_modules/gyronorm/dist/gyronorm.complete.min.js';

const gn = new GyroNorm();

class GyroStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alpha: 0,
      beta: 0,
      gamma: 0,
    };
  }

  componentDidMount() {
    gn.init().then(() => {
      gn.start((data) => {
        this.setState({ alpha: data.do.alpha });
        this.setState({ beta: data.do.beta });
        this.setState({ gamma: data.do.gamma });
      });
    });
  }

  render() {
    return (
      <div>
        <p>α { this.state.alpha || 0 }</p>
        <p>β { this.state.beta || 0 }</p>
        <p>γ { this.state.gamma || 0 }</p>
      </div>
    );
  }
}

export default GyroStats;
