import '../../utils/css/FicheProduitFiniPc.css'
export default function FicheProduitFiniPc({imgName, completeName, shortDesc, paragraphsDescList, checkboxDescList}) {
    const imageProduct = require(`../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const pipetteImage = require('../../images/AKORE WEBSITE/PICTOS/pipette.png')
    const imageLiposome = require('../../images/AKORE WEBSITE/IMAGES/liposome.png')
    return (
            <div className='container'>
            {/*--------------- block description -------------------------*/}
            <div id='description-block'>
                <img src={imageProduct} alt={imgName}/>
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

                {/*--------------- block benefits -------------------------*/}
                <div className='benefits-block'>
                <div className='benefits-title underligned'>
                    <div className='logo-and-image'>
                        <img src={"signeplus"} alt={"logo plus"}/>
                        <h1 className='text title'>BENEFITS</h1>
                    </div>
                    <div className='benefits-logos-title'>
                        <div className='logo-and-image small-text'>
                            <img src={"france"} alt={"france"}/>
                            <p className='text title'>FRENCH <br/> LABORATORY</p>
                        </div>
                        <div className='logo-and-image small-text'>
                            <img src={"face"} alt={"face"}/>
                            <p className='text title'>FACE <br/> SERUM</p>
                        </div>
                        <div className='logo-and-image small-text'>
                            <img src={"signeplus"} alt={"logo plus"}/>
                            <p className='text title'>100% <br/> NISOMALES ACTIVES</p>
                        </div>
                    </div>
                </div>
                <div className='benefits-description'>
                    <div className="benefits-left-block">
                        <div className='checkbox-square'>
                            <h3 className='text title'>UNIQUE PREMIUM NIOSOME FORMULA</h3>
                            <div className='check-line'>
                                <p className='check-mark'> ✓ </p>
                                <p className='text'> High concentration & assimilation </p>
                            </div>
                            <div className='check-line'>
                                <p className='check-mark'> ✓ </p>
                                <p className='text'> Fast-acting & long-lasting </p>
                            </div>
                            <h3 className='text title'>100% PURE & CLEAN</h3>
                            <div className='check-line'>
                                <p className='check-mark'> ✓ </p>
                                <p className='text'>Fragrance-free</p>
                            </div>
                            <div className='check-line'>
                                <p className='check-mark'> ✓ </p>
                                <p className='text'>Not tested on animals - Non-irradiated</p>
                            </div>
                        </div>
                        <img src={imageLiposome} alt="liposome"/>

                    </div>
                    <div className="benefits-right-block">
                        <h2 className='text title'>NIOSOMAL TECHNOLOGY</h2>
                        <p className='text'> ahhhhvalhvfalzhvflzhavfalzhvfzlahbvfhlazqvbfhlzbahlzlzb bazjrhvf zlhhflezhezlf azel ekza eklzgaezklgezeg zejghezmjkh ezmkaezh mjkzeheazmkjh ezkm</p>
                    </div>
                </div>
                    <div className='benefits-ingredients'>
                    </div>
                </div>

                {/*--------------- block ingredients -------------------------*/}
                <div className='ingredients-block'>
                    INGREDIENTS
                </div>

                {/*--------------- block other products -------------------------*/}
                <div className='other-products-block'>
                OTHER PRODUCTS
            </div>
        </div>

    )
}