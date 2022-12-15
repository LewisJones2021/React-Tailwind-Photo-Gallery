/** @format */
import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import { ImageSearch } from './components/ImageSearch';

function App() {
 //creating the state//
 const [images, setImages] = useState([]);

 const [term, setTerm] = useState('');

 const apiKey = '32099007-dfca2420ddadee24f263a9193';

 //making the request to the API//
 useEffect(() => {
  fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
   .then((res) => res.json())
   .then((data) => {
    setImages(data.hits);
   })
   .catch((err) => console.log(err));
 }, [term]);

 return (
  <div className="container mx-auto">
   <ImageSearch searchText={(text) => setTerm(text)} />
   <div className="grid grid-cols-3 gap-4">
    {images.map((image) => (
     <ImageCard key={image.id} image={image} />
    ))}
   </div>
  </div>
 );
}

export default App;
