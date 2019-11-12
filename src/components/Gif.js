import React from 'react';

const Gif = ({ url }) => (
  <li className="gif-wrap">
    <img src={url} alt="gif" />
  </li>
);

export default Gif;
