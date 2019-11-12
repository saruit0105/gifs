import React from 'react';
import Gif from './Gif';

const GifList = ({ gifs }) => (
  <ul className="gif-list">
    {gifs.map(gif => (
      <Gif url={gif.images.fixed_height.url} key={gif.id} />
    ))}
  </ul>
);

export default GifList;
