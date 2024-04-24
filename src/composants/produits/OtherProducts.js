import commonStyle from "../../utils/css/produits/ProductCommon.css"
import style from "../../utils/css/produits/otherProducts.css"
import {getFinishedProductsExceptedOne, getRawProductsExceptedOne} from "../../utils/produits/produitsInfos";
import ProduitCard from "./ProduitCard";
import React from "react";
import {Link} from "react-router-dom";

/**
 * affiche les 4 premiers produits de la listes
 * @param isRawProduct pour savoir si on affiche les produits fini (false) ou les matieres première (true)
 * @param keyOfProductToExclude la clef du produit qu'on ne veut pas afficher
 */
export default function OtherProducts({isRawProduct, keyOfProductToExclude}) {
    // slice(0, 4) permet de récup les 4 premiers éléments
    const products = isRawProduct ? getRawProductsExceptedOne(keyOfProductToExclude).slice(0, 4) : getFinishedProductsExceptedOne(keyOfProductToExclude).slice(0, 4)

    return (
        <div className="other-products-container">
            {isRawProduct ?
                <h2 className='text title underligned'>DISCOVER OUR OTHER RAW MATERIALS</h2>
                :
                <h2 className='text title underligned'>DISCOVER OUR OTHER PRODUCTS</h2>
            }

            <div className="products">
                {products.map((product, index) => {
                    return (
                        <div className='one-other-product'>
                            <ProduitCard
                                key={index}
                                name={product.name}
                                shortDesc={product.shortDesc}
                                imgName={product.imgName}
                                productKey={product.key}
                                isRowProduct={false}
                                isSmall
                            />
                        </div>
                    )
                })}
            </div>

            <Link to='/produits' className="see-all-btn"> SEE ALL PRODUCTS </Link>
        </div>
    )
}