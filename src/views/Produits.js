import React, {useEffect, useState} from 'react';
import '../utils/css/produits.css';
import ProduitCard from "../composants/produits/ProduitCard";
import {getFinishedProducts, getRawProducts} from "../utils/produits/produitsInfos";

export default function Produits() {
    const [, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className='container-all'>
            <div className='container-product-all'>
                <div className='container-product-category' id='finishedProducts'>
                    <div className='item_in_product-category text_in_product_category'>
                        <h2 className='text'> FINISHED PRODUCTS </h2>
                        <p className='small-text text'>A selection of finished</p>
                        <p className='small-text text'>liposomal products </p>
                    </div>
                    {getFinishedProducts().map((product, index) => (
                        <div key={index} className='item_in_product-category'>
                            <ProduitCard
                                name={product.name}
                                shortDesc={product.shortDesc}
                                imgName={product.imgName}
                                productKey={product.key}
                                isRowProduct={false}
                            />
                        </div>
                    ))}
                </div>
                <div className='container-product-category' id="rawMaterial">
                    <div className='item_in_product-category text_in_product_category'>
                        <h2 className='text'> RAW MATERIAL </h2>
                        <p className='small-text text'>A selection of raw</p>
                        <p className='small-text text'>liposomal materials </p>
                    </div>
                    {getRawProducts().map((product, index) => (
                        <div key={index} className='item_in_product-category'>
                            <ProduitCard
                                name={product.name}
                                shortDesc={product.shortDesc}
                                imgName={product.imgName}
                                productKey={product.key}
                                isRowProduct={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
