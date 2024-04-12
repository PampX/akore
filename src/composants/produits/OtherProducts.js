import style from "../../utils/css/produits/otherProducts.css"
import {getFinishedProductsExceptedOne, getRawProductsExceptedOne} from "../../utils/produits/produitsInfos";
import ProduitCard from "./ProduitCard";
import React from "react";

/**
 * affiche les 4 premiers produits de la listes
 * @param isRawProduct pour savoir si on affiche les produits fini (false) ou les matieres première (true)
 * @param keyOfProductToExclude la clef du produit qu'on ne veut pas afficher
 */
export default function OtherProducts({isRawProduct, keyOfProductToExclude}) {
    // slice(0, 4) permet de récup les 4 premiers éléments
    const products = isRawProduct ? getRawProductsExceptedOne(keyOfProductToExclude).slice(0, 4) : getFinishedProductsExceptedOne(keyOfProductToExclude).slice(0, 4)

    return (
        <div className="products">
            {products.map( (product, index) => {return (
                <ProduitCard
                    key={index}
                    name={product.name}
                    shortDesc={product.shortDesc}
                    imgName={product.imgName}
                    productKey={product.key}
                    isRowProduct={false}
                />
                )})}
        </div>
    )
}