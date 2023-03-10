/** @format */

import React from 'react';

const ImageCard = ({ image }) => {
 const tags = image.tags.split(',');

 return (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-500 mt-5">
   <img src={image.webformatURL} alt="" className="w-full" />
   <div className="px-6 py-4">
    <div className="font-bold text-white text-xl mb-2 mt-2">Photo by {image.user}</div>
    <ul className="text-gray-400 mt-4">
     <li>
      <strong>Views: </strong>
      {image.views}
     </li>
     <li>
      <strong>Downloads: </strong>
      {image.downloads}
     </li>
     <li>
      <strong>Likes: </strong>
      {image.likes}
     </li>
    </ul>
   </div>
   <div className="px-6 py-4">
    {tags.map((tag, index) => (
     <span
      key={index}
      className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 bg-sky-400 text-white">
      #{tag}
     </span>
    ))}
   </div>
  </div>
 );
};

export default ImageCard;
