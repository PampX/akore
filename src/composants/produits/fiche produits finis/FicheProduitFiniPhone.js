import style from '../../../utils/css/produits/fiche produits finis/FicheProduitFiniPhone.css'
import FPFGeneralDescription from "./FPFGeneralDescription";
import plusPicto from "../../../images/AKORE WEBSITE/PICTOS/plus.png";
import FPFCheckBoxBenefits from "./FPFCheckBoxBenefits";

export default function FicheProduitFiniPhone ({productKey, imgName, completeName, shortDesc, ingredientsList, paragraphsDescList, checkboxDescList, ingredientParagraph, howToUseParagraphsList, precautionsParagraphsList}){
    const imageProduct = require(`../../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const francePicto = require('../../../images/AKORE WEBSITE/PICTOS/france.png')
    const facePicto = require('../../../images/AKORE WEBSITE/PICTOS/face.png')
    const liposomePicto = require('../../../images/AKORE WEBSITE/PICTOS/liposome.png')
    const pipettePicto = require('../../../images/AKORE WEBSITE/PICTOS/pipette.png')

    return (
        <div className="container-FPF-phone">
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
                <FPFGeneralDescription
                    completeName={completeName}
                    shortDesc={shortDesc}
                    paragraphsDescList={paragraphsDescList}
                    checkboxDescList={checkboxDescList}
                />
            </div>

            {/*--------------- block benefits -------------------------*/}
            <div className='benefits-block-phone'>
                <div className='logo-and-image underligned'>
                    <img src={plusPicto} alt={"logo plus"}/>
                    <h1 className='text title'>BENEFITS</h1>
                </div>
                <FPFCheckBoxBenefits/>
            </div>

        </div>
    )
}