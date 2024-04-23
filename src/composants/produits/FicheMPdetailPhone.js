import style from '../../utils/css/produits/FicheMPdetailPhone.css'
import FicheProduitGeneralDescription from "./FicheProduitGeneralDescription";
import NiosomalTechnoParagraph from "./NiosomalTechnoParagraph";
import ProductTripleList from "./ProductTripleList";
import List from "./List";
import OtherProducts from "./OtherProducts";
import MPCheckBoxBenefits from "./MPCheckBoxBenefits";
import imageLiposome from "../../images/AKORE WEBSITE/IMAGES/liposome.png";

export default function FicheMPdetailPhone({
                                               productKey,
                                               imgName,
                                               name,
                                               shortDesc,
                                               benefitsList,
                                               paragraphsDescList,
                                               checkboxDescList,
                                               ingredientParagraph,
                                               howToUseParagraphsList,
                                               precautionsParagraphsList
                                           }) {
    const imageProduct = require(`../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const francePicto = require('../../images/AKORE WEBSITE/PICTOS/france.png')
    const facePicto = require('../../images/AKORE WEBSITE/PICTOS/face.png')
    const liposomePicto = require('../../images/AKORE WEBSITE/PICTOS/liposome.png')
    const pipettePicto = require('../../images/AKORE WEBSITE/PICTOS/pipette.png')
    const plusPicto = require("../../images/AKORE WEBSITE/PICTOS/plus.png")

    const imageGoutte = require("../../images/AKORE WEBSITE/IMAGES/fiche-MP-goutte-phone.png")
    const imageFemme = require("../../images/AKORE WEBSITE/IMAGES/femme-MP-gris-phone.png")
    const imageLiposome = require('../../images/AKORE WEBSITE/IMAGES/liposome.png')

    return (
        <div className="container-FPF-phone-MP">
            {/*--------------- block image -------------------------*/}
            <div className="image-block-phone">
                <img src={imageProduct} alt={imgName}/>
                <div className="logos">
                    <div className='logo-and-image small-text'>
                        <img src={francePicto} alt={"france"}/>
                        <p className='text title'>FRENCH <br/> LABORATORY</p>
                    </div>
                    <div className='logo-and-image small-text face-logo'>
                        <img src={facePicto} alt={"face"}/>
                        <p className='text title'>FACE <br/> SERUM</p>
                    </div>
                    <div className='logo-and-image small-text lipo-logo'>
                        <img src={liposomePicto} alt={"logo liposome"}/>
                        <pre className='text title'>100% <br/> NISOMALES ACTIVES</pre>
                    </div>
                    <div className='logo-and-image'>
                        <img src={pipettePicto} alt={"logo pipette"}/>
                        <p className='text brown-text'>1 floz</p>
                    </div>
                </div>
            </div>

            {/*--------------- block description -------------------------*/}
            <div className="desc-block-phone">
                <FicheProduitGeneralDescription
                    completeName={name + " NIOSOME SERUM"}
                    shortDesc={shortDesc}
                    paragraphsDescList={paragraphsDescList}
                    checkboxDescList={checkboxDescList}
                />
            </div>

            {/*--------------- block benefits -------------------------*/}
            <div className='benefits-block-phone-MP'>
                <img src={imageGoutte}/>
                <div className='logo-and-image'>
                    <img src={plusPicto} alt={"logo plus"}/>
                    <h1 className='text title'>BENEFITS</h1>
                </div>
                <MPCheckBoxBenefits/>

                <a href="#ingredients-phone-MP" className={"discover-compo"}>
                    <p className={"underligned text"}> DISCOVER </p>
                    <p className={"text"}>the complete composition</p>
                </a>
            </div>

            <img className='img-femme-MP-phone' src={imageFemme}/>

            <List items={benefitsList}/>

            {/*--------------- block ingredients -------------------------*/}
            <div id="ingredients-phone-MP">
                <div className='liste-produits-phone-MP'>
                    <ProductTripleList
                        ingredientParagraph={ingredientParagraph}
                        howToUseParagraphsList={howToUseParagraphsList}
                        precautionsParagraphsList={precautionsParagraphsList}
                    />
                </div>
            </div>

            {/*--------------- niosomal paragraph -------------------------*/}
            <div>
                {/*<img src={imageLiposome} alt="liposome"/>*/}
                <NiosomalTechnoParagraph/>
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