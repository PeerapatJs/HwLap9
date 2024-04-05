import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Wholucky() { //Function Component
  const User_list = ['User1', 'User2', 'User3'];
  var random_user = User_list[Math.floor(Math.random() * User_list.length)];
  return <span> and {random_user} </span>;
}

class Name extends React.Component { //Class Component
  constructor(props) { //Props
    super(props);
    this.state = {    //State
      bonuses: ["Money 1 bath", "Gold 1 gram", "Pen", "IPhone 28 Super Pro Max"],
      currentBonus: "Money 1 bath",
    };
  }

  random_bonus = () => {
    const randomIndex = Math.floor(Math.random() * this.state.bonuses.length);
    const randomBonus = this.state.bonuses[randomIndex];
    this.setState({ currentBonus: randomBonus }); //State
  };

  render() {
    return (
      <div className='front'>
        <h1 style={{ color: "white",background:"black",padding: 0,textAlign:'center'}}>Hello{this.props.name}<Wholucky /></h1>
        <h1 style={{ color: "white",background:"black",padding: 0,textAlign:'center'}}>Your bonus is {this.state.currentBonus}</h1>
        <button className='front button' onClick={this.random_bonus}>Next user</button>
      </div>
    );
  }
}

ReactDOM.render(<Name name=" Lucky user is " />, document.getElementById('lucky'));
reportWebVitals();
