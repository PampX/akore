import '../../utils/css/FicheProduitFiniPc.css'
export default function FicheProduitFiniPc({imgName, completeName, shortDesc, paragraphsDescList, checkboxDescList}) {
    const image = require(`../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const pipetteImage = require('../../images/AKORE WEBSITE/PICTOS/pipette.png')
    return (
        <div className='container'>
            <div id='description-block'>
                <img src={image} alt={imgName}/>
                <div id='right-block'>
                    <h1 className='text title'> {completeName} </h1>
                    <p className='text brown-text underligned'> {shortDesc} </p>
                    <div className='logo-and-image'>
                        <img src={pipetteImage} alt={"logo pipette"}/>
                        <p className='text brown-text'>1 floz</p>
                    </div>
                    {paragraphsDescList.map((descParagraph, index) => { return (
                            <div className='pargraph text' key={index}>
                                {descParagraph}
                            </div>
                        )})}
                    <div className='checkbox-square'>
                        {checkboxDescList.map((checkText, index) => {return (
                            <div className='check-line' key={index}>
                                <p className='brown-text check-mark'> ✓ </p>
                                <p className='text'> {checkText} </p>
                            </div>
                        )})}
                    </div>
                </div>
            </div>

            <div className='benefits-block'>
                BENEFITS
            </div>

            <div className='ingredients-block'>
                INGREDIENTS
            </div>

            <div className='other-products-block'>
                OTHER PRODUCTS
            </div>
        </div>

    )
}