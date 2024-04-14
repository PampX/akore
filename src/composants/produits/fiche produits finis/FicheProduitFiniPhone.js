import style from '../../../utils/css/produits/fiche produits finis/FicheProduitFiniPhone.css'
import FPFGeneralDescription from "./FPFGeneralDescription";

export default function FicheProduitFiniPhone ({productKey, imgName, completeName, shortDesc, ingredientsList, paragraphsDescList, checkboxDescList, ingredientParagraph, howToUseParagraphsList, precautionsParagraphsList}){
    return (
        <div className="container-FPF-phone">
            <div>
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