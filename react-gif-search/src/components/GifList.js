import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
  const gifItems = props.gifs.map((img)=>{
    return <GifItem key={img.id}
                    gif={img}
                    onGifSelect={props.onGifSelect}
                    onFavoriteSelect={props.onFavoriteSelect}
                    onFavoriteDeselect={props.onFavoriteDeselect}
                    isAuthenticated={props.isAuthenticated}
                    isFavorite={props.isFavorite} />
  });

  return(
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;
