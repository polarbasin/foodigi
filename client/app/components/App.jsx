import React from 'react';
import Button from './Button.jsx';
import Search from './Search.jsx';

const App = () => (
  <div className="container">
    <h1>FoodCompass</h1>
    <p>What do you want to eat?</p>
    <Search />
    <Button />
  </div>
);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <p>Hello!!!!</p>
//     );
//   }
// }

export default App;
