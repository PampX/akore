import commonStyle from '../../../utils/css/produits/ProductCommon.css'
import '../../../utils/css/produits/FicheProduitFiniPc.css'
import ProductTripleList from "../ProductTripleList";
import List from "../List";
import OtherProducts from "../OtherProducts";

export default function FicheProduitFiniPc({productKey, imgName, completeName, shortDesc, ingredientsList, paragraphsDescList, checkboxDescList, ingredientParagraph, howToUseParagraphsList, precautionsParagraphsList}) {
    const imageProduct = require(`../../../images/AKORE WEBSITE/PRODUITS/${imgName}`)
    const imageLiposome = require('../../../images/AKORE WEBSITE/IMAGES/liposome.png')

    const pipettePicto = require('../../../images/AKORE WEBSITE/PICTOS/pipette.png')
    const plusPicto = require('../../../images/AKORE WEBSITE/PICTOS/plus.png')
    const francePicto = require('../../../images/AKORE WEBSITE/PICTOS/france.png')
    const facePicto = require('../../../images/AKORE WEBSITE/PICTOS/face.png')
    const liposomePicto = require('../../../images/AKORE WEBSITE/PICTOS/liposome.png')

    return (
        <div className='container'>
            {/*--------------- block description -------------------------*/}
            <div id='description-block'>
                <img src={imageProduct} alt={imgName}/>
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
                        <List
                            items={ingredientsList}
                        />
                        <a href="#ingredients" className={"discover-compo"}>
                            <p className={"underligned text"}> DISCOVER </p>
                            <p className={"text"}>the complete composition</p>
                        </a>
                    </div>
                </div>
                <div className="niosomal-techno">
                    <h3 className='text title'>NIOSOMAL TECHNOLOGY®</h3>
                    <p className="text pargraph">At Akore Formulations, we're revolutionizing the world of cosmetics through innovation and scientific expertise. We use niosome technology to push back the boundaries of cosmetic efficacy.</p>
                    <p className="text pargraph">This non-ionic encapsulation system is designed to enhance the delivery of active ingredients to the skin. Thanks to their unique structure, they effectively encapsulate ingredients, enabling controlled release and better penetration into the skin.</p>
                    <p className="text pargraph">The result is a significant increase in the efficacy of cosmetic products, while ensuring optimum protection of sensitive active ingredients. <br/>
                        In collaboration with dermatology experts, we offer highly concentrated, premium-quality cosmetics.</p>
                </div>
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