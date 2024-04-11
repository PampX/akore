import {getFinishedProductsExceptedOne, getRawProductsExceptedOne} from "../../utils/produits/produitsInfos";

export default function OtherProducts({isRawProduct, keyOfProductToExclude}) {
    const products = isRawProduct ? getRawProductsExceptedOne(keyOfProductToExclude) : getFinishedProductsExceptedOne(keyOfProductToExclude)
}