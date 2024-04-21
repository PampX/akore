import {useMediaQuery} from 'react-responsive'
import React from 'react';
import {useParams} from 'react-router-dom';
import FicheProduitFiniPhone from "../composants/produits/fiche produits finis/FicheProduitFiniPhone";
import {getRawProductByKey} from "../utils/produits/produitsInfos";
import FicheMPdetailPC from "../composants/produits/ficheMPdetailPC";

export default function FicheProduitMP() {
    const params = useParams()

    const product = getRawProductByKey(params.productKey)

    const isPhone = useMediaQuery({query: '(max-width: 750px)'})
    return (
        <div>
            {isPhone ?
                <FicheProduitFiniPhone
                    productKey={product.key}
                    imgName={product.imgName}
                    completeName={product.completeName}
                    shortDesc={product.shortDesc}
                    paragraphsDescList={product.paragraphsDescList}
                    checkboxDescList={product.checkboxDescList}
                    ingredientsList={product.ingredientsList}
                    ingredientParagraph={product.ingredientParagraph}
                    howToUseParagraphsList={product.howToUseParagraphsList}
                    precautionsParagraphsList={product.precautionsParagraphsList}
                />
                :
                <FicheMPdetailPC
                    productKey={product.key}
                    imgName={product.imgName}
                    name={product.name}
                    shortDesc={product.shortDesc}
                    paragraphsDescList={product.paragraphsDescList}
                    checkboxDescList={product.checkboxDescList}
                    benefitsList={product.benefitsList}
                    ingredientParagraph={product.ingredientParagraph}
                    howToUseParagraphsList={product.howToUseParagraphsList}
                    precautionsParagraphsList={product.precautionsParagraphsList}
                />
            }
        </div>
    )
}