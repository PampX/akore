import style from '../utils/css/produits/fiche produits finis/FPFCommon.css'
import {useMediaQuery} from 'react-responsive'
import React from 'react';
import {useParams} from 'react-router-dom';
import FicheProduitFiniPhone from "../composants/produits/fiche produits finis/FicheProduitFiniPhone";
import FicheProduitFiniPc from "../composants/produits/fiche produits finis/FicheProduitFiniPc";
import {getFinishedProductByKey} from "../utils/produits/produitsInfos";

export default function FicheProduitFini() {
    const params = useParams()

    const product = getFinishedProductByKey(params.productKey)

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
                <FicheProduitFiniPc
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
            }
        </div>
    )
}