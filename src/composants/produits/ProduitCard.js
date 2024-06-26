import '../../utils/css/produits/produitCard.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function ProduitCard({name, shortDesc, imgName, productKey, isRowProduct, isSmall=false}) {
    const navigate = useNavigate();
    const image = require(`../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const handleClick = () => {
        if (isRowProduct){
            return navigate(`/matiere_premiere/detail/${productKey}`);
        }else {
            return navigate(`/produit_fini/detail/${productKey}`);
        }
    };

    return (
            <div
                className={`container-one-product ${isSmall?"small":""}`}
                onClick={() => handleClick()}
            >
                <img className='img-product-pres' src={image} alt={name}/>
                <p className='text-product-product'>{name}</p>
                <p className='product-shortdesc'>{shortDesc}</p>
            </div>
    );
}
