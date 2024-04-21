import commonStyle from '../../utils/css/produits/ProductCommon.css'
import style from '../../utils/css/produits/ficheMPdetailPC.css'
import '../../utils/css/produits/fiche produits finis/FicheProduitFiniPc.css'
import ProductTripleList from "./ProductTripleList";
import OtherProducts from "./OtherProducts";
import FicheProduitGeneralDescription from "./FicheProduitGeneralDescription";
import FPFCheckBoxBenefits from "./fiche produits finis/FPFCheckBoxBenefits";
import NiosomalTechnoParagraph from "./NiosomalTechnoParagraph";

export default function FicheMPdetailPC({productKey, imgName, name, shortDesc, paragraphsDescList, checkboxDescList, benefitsList, ingredientParagraph, howToUseParagraphsList, precautionsParagraphsList}) {
    const imageProduct = require(`../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const imageLiposome = require('../../images/AKORE WEBSITE/IMAGES/liposome.png')

    const plusPicto = require('../../images/AKORE WEBSITE/PICTOS/plus.png')
    const francePicto = require('../../images/AKORE WEBSITE/PICTOS/france.png')
    const facePicto = require('../../images/AKORE WEBSITE/PICTOS/face.png')
    const liposomePicto = require('../../images/AKORE WEBSITE/PICTOS/liposome.png')

    return (
        <div className='container'>
            {/*--------------- block description -------------------------*/}
            <div id='description-block'>
                <img className='MP-image' src={imageProduct} alt={imgName}/>
                <FicheProduitGeneralDescription
                    completeName={name+" NISOSOME SERUM"}
                    shortDesc={shortDesc}
                    paragraphsDescList={paragraphsDescList}
                    checkboxDescList={checkboxDescList}
                />
            </div>

            {/*--------------- block benefits -------------------------*/}
            <div className='benefits-block'>
                <div className='benefits-title underligned'>
                    <div className='logo-and-image'>
                        <img src={plusPicto} alt={"logo plus"}/>
                        <h1 className='text title'>BENEFITS</h1>
                    </div>
                    <div className='benefits-logos-title'>
                        <div className='logo-and-image small-text france-picto'>
                            <img src={francePicto} alt={"france"}/>
                            <p className='text title'>FRENCH <br/> LABORATORY</p>
                        </div>
                        <div className='logo-and-image small-text'>
                            <img src={facePicto} alt={"face"}/>
                            <p className='text title'>FACE <br/> SERUM</p>
                        </div>
                        <div className='logo-and-image small-text'>
                            <img src={liposomePicto} alt={"logo liposome"}/>
                            <p className='text title'>100% <br/> NISOMALES ACTIVES</p>
                        </div>
                    </div>
                </div>
                <div className='benefits-description'>
                    <div className="benefits-left-block">
                        <FPFCheckBoxBenefits/>
                        <img src={imageLiposome} alt="liposome"/>

                    </div>
                </div>
                <NiosomalTechnoParagraph/>
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