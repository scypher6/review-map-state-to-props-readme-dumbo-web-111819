import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    console.log(this.props.store)
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    console.log(this.props)

    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>Items: {this.props.orange.length}</p>
          <p>Users: {this.props.users.length}</p>
      </div>
    );
  }
}

const vanilla = (milkshake) => {
  // debugger;
  return { orange: milkshake.items, users: milkshake.users}
}

export default connect(vanilla )(App);
// export default connect( state =>  ({ items: state.items }) )(App);
