import '../utils/css/produitCard.css';
import React from 'react';

export default function ProduitCard({name, shortDesc, desc, desc2, path, imgName}) {
    const image = require('../images/home/' + imgName)
    const handleClick = () => {
        //@Todo: navigate to product page
    };

    return (
        <div className='container-all'>
            <div
                className={`container-one-product`}
                onClick={() => handleClick()}
            >
                <img className='img-product-pres' src={image} alt={name}/>
                <p className='text-product-product'>{name}</p>
                <p className='product-shortdesc'>{shortDesc}</p>
            </div>
        </div>
    );
}
