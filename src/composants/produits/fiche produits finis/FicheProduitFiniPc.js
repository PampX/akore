import commonStyle from '../../../utils/css/produits/ProductCommon.css'
import '../../../utils/css/produits/fiche produits finis/FicheProduitFiniPc.css'
import ProductTripleList from "../ProductTripleList";
import List from "../List";
import OtherProducts from "../OtherProducts";
import FicheProduitGeneralDescription from "../FicheProduitGeneralDescription";
import FPFCheckBoxBenefits from "./FPFCheckBoxBenefits";
import NiosomalTechnoParagraph from "../NiosomalTechnoParagraph";

export default function FicheProduitFiniPc({productKey, imgName, completeName, shortDesc, ingredientsList, paragraphsDescList, checkboxDescList, ingredientParagraph, howToUseParagraphsList, precautionsParagraphsList}) {
    const imageProduct = require(`../../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const imageLiposome = require('../../../images/AKORE WEBSITE/IMAGES/liposome.png')
    const imageCreme = require("../../../images/AKORE WEBSITE/IMAGES/fond-creme.png")

    const plusPicto = require('../../../images/AKORE WEBSITE/PICTOS/plus.png')
    const francePicto = require('../../../images/AKORE WEBSITE/PICTOS/france.png')
    const facePicto = require('../../../images/AKORE WEBSITE/PICTOS/face.png')
    const liposomePicto = require('../../../images/AKORE WEBSITE/PICTOS/liposome.png')

    return (
        <div className='container'>
            {/*--------------- block description -------------------------*/}
            <div id='description-block'>
                <img src={imageProduct} alt={imgName}/>
                <FicheProduitGeneralDescription
                    completeName={completeName}
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
                    <div className="benefits-right-block">
                        <List
                            items={ingredientsList}
                        />
                        <a href="#ingredients" className={"discover-compo"}>
                            <p className={"underligned text"}> DISCOVER </p>
                            <p className={"text"}>the complete composition</p>
                        </a>
                    </div>
                </div>
                <NiosomalTechnoParagraph/>
            </div>

            {/*--------------- block ingredients -------------------------*/}
            <div id="ingredients">
                <div className='ingredients-block'>
                    <ProductTripleList
                        ingredientParagraph={ingredientParagraph}
                        howToUseParagraphsList={howToUseParagraphsList}
                        precautionsParagraphsList={precautionsParagraphsList}
                    />
                </div>
                <img src={imageCreme}/>
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