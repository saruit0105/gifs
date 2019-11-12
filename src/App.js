import React, { Component } from 'react';
import GifList from './components/GifList';
import Search from './components/Search';
import axios from 'axios';

class App extends Component {
  state = { gifs: [], searchTerm: '' };

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = async () => {
    const { searchTerm } = this.state;
    const { data } = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm || 'cat'}&limit=24&api_key=dc6zaTOxFJmzC`
    );
    this.setState({ gifs: data.data });
  };

  handleInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.fetchGifs();
  };

  render() {
    const { gifs } = this.state;

    return (
      <div className="App">
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gif Search</h1>
            <Search handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
          </div>
        </div>
        <div className="main-content">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
