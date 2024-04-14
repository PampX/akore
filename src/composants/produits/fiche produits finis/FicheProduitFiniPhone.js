import style from '../../../utils/css/produits/fiche produits finis/FicheProduitFiniPhone.css'
import FPFGeneralDescription from "./FPFGeneralDescription";
import francePicto from "../../../images/AKORE WEBSITE/PICTOS/france.png";
import facePicto from "../../../images/AKORE WEBSITE/PICTOS/face.png";
import liposomePicto from "../../../images/AKORE WEBSITE/PICTOS/liposome.png";
import pipettePicto from "../../../images/AKORE WEBSITE/PICTOS/pipette.png";

export default function FicheProduitFiniPhone ({productKey, imgName, completeName, shortDesc, ingredientsList, paragraphsDescList, checkboxDescList, ingredientParagraph, howToUseParagraphsList, precautionsParagraphsList}){
    const imageProduct = require(`../../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const francePicto = require('../../../images/AKORE WEBSITE/PICTOS/france.png')
    const facePicto = require('../../../images/AKORE WEBSITE/PICTOS/face.png')
    const liposomePicto = require('../../../images/AKORE WEBSITE/PICTOS/liposome.png')
    const pipettePicto = require('../../../images/AKORE WEBSITE/PICTOS/pipette.png')

    return (
        <div className="container-FPF-phone">
            <div className="image-block">
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

            <div className="desc-block">
                <FPFGeneralDescription
                    completeName={completeName}
                    shortDesc={shortDesc}
                    paragraphsDescList={paragraphsDescList}
                    checkboxDescList={checkboxDescList}
                />
            </div>
        </div>
    )
}