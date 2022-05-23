import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([]);

    return (
        <div>
            <h2 className='title'>Buscador de Gif's</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol className='principal'>

                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </div>
    )
}
