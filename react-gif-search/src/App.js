import React from 'react';
import './App.css';
import request from 'superagent';
import GifList from './components/GifList';
import GifModal from './components/GifModal';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    };
      //scoping
    this.handleTermChange = this.handleTermChange.bind(this);
      //instead of binding here you could also remove the above line and use fat arrow function
        //in the method declaration below (it is what the modal is doing on line 55 & 58):
          // (line 40): handleTermChange = (term) => {
  }

  openModal(gif)
  {
    this.setState({
      modalIsOpen:true,
      selectedGif:gif
    })
  }
  closeModal()
  {
    this.setState({
      modalIsOpen:false,
      selectedGif:null
    })
  }

  handleTermChange(term)
  {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

      //scoping (has to be fat arrow fnc)
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs}
                 onGifSelect={selectedGif => this.openModal(selectedGif) } />
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
}

export default App;
