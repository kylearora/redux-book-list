import React, { Component } from 'react';
import '../styles/App.css';
import BookDetail from "../containers/BookDetail"
import BookList from "../containers/BookList"


class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Book List!</h1>
        </header>

        <div className="contentDiv">
          <BookList />
          <BookDetail />
        </div>
      </div>
    );
  }
}

export default App;
