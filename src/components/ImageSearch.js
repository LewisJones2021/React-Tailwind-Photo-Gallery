/** @format */

import React, { useState } from 'react';

export const ImageSearch = ({ searchText }) => {
 const [text, setText] = useState('');

 const onSubmit = (e) => {
  e.preventDefault();
  searchText(text);
 };
 return (
  <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
   <form onSubmit={onSubmit} className="w-full max-w-sm">
    <div className="flex items-center border-teal-500 py-2">
     <input
      onChange={(e) => setText(e.target.value)}
      className="appearance-none  bg-white border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none rounded-lg"
      type="text"
      placeholder="Search Image Term..."
     />
     <button
      className="flex-shrink-0 bg-sky-400 hover:bg-white  text-sm hover:text-black  text-white py-2 px-2 rounded-lg"
      type="submit">
      Search
     </button>
    </div>
   </form>
  </div>
 );
};
