import {useMediaQuery} from 'react-responsive'
import React from 'react';
import {useParams} from 'react-router-dom';
import FicheProduitFiniPhone from "../composants/produits/FicheProduitFiniPhone";
import FicheProduitFiniPc from "../composants/produits/FicheProduitFiniPc";
import {getFinishedProductByKey} from "../utils/produits/produitsInfos";

export default function FicheProduitFini() {
    const params = useParams()

    const product = getFinishedProductByKey(params.productKey)

    const isPhone = useMediaQuery({query: '(max-width: 750px)'})
    return (
        <div>
            {isPhone ?
                <FicheProduitFiniPhone
                />
                :
                <FicheProduitFiniPc
                    imgName={product.imgName}
                    completeName={product.completeName}
                    shortDesc={product.shortDesc}
                    paragraphsDescList={product.paragraphsDescList}
                    checkboxDescList={product.checkboxDescList}
                    ingredientParagraph={product.ingredientParagraph}
                    howToUseParagraphsList={product.howToUseParagraphsList}
                    precautionsParagraphsList={product.precautionsParagraphsList}
                />
            }
        </div>
    )
}