import React, { useState, useEffect  } from 'react';
import { getGifs } from './getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])


    useEffect( () => {
        getGifs(category).then( setImages );

    }, [ category ] )
    
   
    return (
        <>
        
        <h3 className='categoryTitle'> {category}</h3>
    
           { 
           images.map( (image) => (
            <GifGridItem  
                key={image.id}
                {...image} /> ) ) 
            } 
    </>
    )
        }