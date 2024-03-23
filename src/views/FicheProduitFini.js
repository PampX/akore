import {useMediaQuery} from 'react-responsive'
import React from 'react';
import {useParams} from 'react-router-dom';
import FicheProduitFiniPhone from "../composants/produits/FicheProduitFiniPhone";
import FicheProduitFiniPc from "../composants/produits/FicheProduitFiniPc";

export default function FicheProduitFini() {
    const productKey = useParams()

    const isPhone = useMediaQuery({query: '(max-width: 750px)'})
    return (
        <div>
            {isPhone ?
                <FicheProduitFiniPhone/>
                :
                <FicheProduitFiniPc/>
            }
        </div>
    )
}