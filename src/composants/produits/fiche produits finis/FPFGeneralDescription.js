import commonStyle from '../../../utils/css/produits/ProductCommon.css'

export default function FPFGeneralDescription({completeName, shortDesc, paragraphsDescList, checkboxDescList}) {
    const pipettePicto = require('../../../images/AKORE WEBSITE/PICTOS/pipette.png')

    return (
        <div id='right-block'>
            <h1 className='text title'> {completeName} </h1>
            <p className='text brown-text underligned'> {shortDesc} </p>
            <div className='logo-and-image'>
                <img src={pipettePicto} alt={"logo pipette"}/>
                <p className='text brown-text'>1 floz</p>
            </div>
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
