import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/searchBar/searchBar.js";
import PostContainer from "./components/postContainer/postContainer.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer data={dummyData} />
      </div>
    );
  }
}

export default App;