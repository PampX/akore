import commonStyle from '../../utils/css/produits/ProductCommon.css'
import style from '../../utils/css/produits/ficheMPdetailPC.css'
import '../../utils/css/produits/fiche produits finis/FicheProduitFiniPc.css'
import ProductTripleList from "./ProductTripleList";
import OtherProducts from "./OtherProducts";
import FicheProduitGeneralDescription from "./FicheProduitGeneralDescription";
import MPCheckBoxBenefits from "./MPCheckBoxBenefits";

export default function FicheMPdetailPC({
                                            productKey,
                                            imgName,
                                            name,
                                            shortDesc,
                                            paragraphsDescList,
                                            checkboxDescList,
                                            benefitsList,
                                            ingredientParagraph,
                                            howToUseParagraphsList,
                                            precautionsParagraphsList
                                        }) {
    const imageProduct = require(`../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const imageLiposome = require('../../images/AKORE WEBSITE/IMAGES/liposome.png')

    const plusPicto = require('../../images/AKORE WEBSITE/PICTOS/plus.png')
    const imageGoutte = require('../../images/AKORE WEBSITE/IMAGES/fiche-MP-goutte.png')

    return (
        <div className='container'>
            {/*--------------- block description -------------------------*/}
            <div id='description-block'>
                <img className='MP-image' src={imageProduct} alt={imgName}/>
                <FicheProduitGeneralDescription
                    completeName={name + " NIOSOME SERUM"}
                    shortDesc={shortDesc}
                    paragraphsDescList={paragraphsDescList}
                    checkboxDescList={checkboxDescList}
                />
            </div>

            {/*--------------- block benefits -------------------------*/}
            <div className='benefits-block-MP'>
                <img src={imageGoutte}/>
                <div className='benefits-MP'>
                    <div className='benefits-title-MP'>
                        <div className='logo-and-image'>
                            <img src={plusPicto} alt={"logo plus"}/>
                            <h2 className='text title'>BENEFITS</h2>
                        </div>
                    </div>
                    <MPCheckBoxBenefits/>
                    <a href="#ingredients" className={"discover-compo-MP"}>
                        <p className={"underligned text"}> DISCOVER </p>
                        <p className={"text"}>the complete composition</p>
                    </a>
                </div>
            </div>

            {/*--------------- block ingredients -------------------------*/}
            <div id="ingredients" className='ingredients-image-background'>
                <div className='ingredients-block'>
                    <ProductTripleList
                        ingredientParagraph={ingredientParagraph}
                        howToUseParagraphsList={howToUseParagraphsList}
                        precautionsParagraphsList={precautionsParagraphsList}
                    />
                </div>
            </div>

            {/*--------------- block other products -------------------------*/}
            <div className='other-products-block'>
                <OtherProducts
                    isRawProduct={false}
                    keyOfProductToExclude={productKey}
                />
            </div>
        </div>

    )
}