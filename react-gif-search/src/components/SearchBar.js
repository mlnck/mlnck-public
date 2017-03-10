import React from 'react';

class SearchBar extends React.Component
{
  onInputChange(term)
  { this.props.onTermChange(term) }

  render(){
    return (
      <div className="search">
        <input placeholder="Enter text to search for gifs!" onChange={e => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
