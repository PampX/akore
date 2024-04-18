import commonStyle from '../../../utils/css/produits/ProductCommon.css'
import style from '../../../utils/css/produits/fiche produits finis/FPFGeneralDescription.css'
import {useMediaQuery} from "react-responsive";

export default function FPFGeneralDescription({completeName, shortDesc, paragraphsDescList, checkboxDescList}) {
    const pipettePicto = require('../../../images/AKORE WEBSITE/PICTOS/pipette.png')
    const isPhone = useMediaQuery({query: '(max-width: 750px)'})

    return (
        <div id='right-block' className={isPhone ? "desc-phone" : ""}>
            <h1 className='text title'> {completeName} </h1>
            <p className='text brown-text underligned'> {shortDesc} </p>
            {isPhone ? "" : (
                <div className='logo-and-image'>
                    <img src={pipettePicto} alt={"logo pipette"}/>
                    <p className='text brown-text'>1 floz</p>
                </div>
            )}
            {paragraphsDescList.map((descParagraph, index) => {
                return (
                    <div className='pargraph text' key={index}>
                        {descParagraph}
                    </div>
                )
            })}
            <div className='checkbox-square'>
                {checkboxDescList.map((checkText, index) => {
                    return (
                        <div className='check-line' key={index}>
                            <p className='brown-text check-mark'> ✓ </p>
                            <p className='text'> {checkText} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
