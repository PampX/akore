import { useEffect, useState } from 'react';
import '../utils/css/home.css';
import '../utils/css/akore.css'
import imgIntro from '../images/AKORE-img/Home/femme-desert.jpg';
import { Link } from 'react-router-dom';

import drop from '../images/AKORE-img/Home/drop-flacon.png'
import liposomeSchema from '../images/AKORE-img/Home/liposome-schema.png'
import icon1 from '../images/AKORE-img/Home/icon1.svg'
import icon2 from '../images/AKORE-img/Home/icon2.svg'
import icon3 from '../images/AKORE-img/Home/icon3.svg'
import icon4 from '../images/AKORE-img/Home/icon4.svg'

export default function Home() {


    return (
        <div className='container-home'>
            <div className='container-intro-home'>
                <img src={imgIntro} alt='femme' className='home-imgIntro' />
                <div className='home-div-onImage'>
                    <h1 className='home-title-bold'>NIOSOMAL</h1>
                    <h1 className='home-title'>TECHNOLOGY</h1>
                    <div className='line-bold'></div>
                    <p className='home-p-bold'>The revolution in cosmetics</p>
                    <p className='home-p'>Your best choice for maximum assimilation of active ingredients</p>
                </div>
            </div>
            <div className='container-text-intro-background'>
                <p className='text-intro-background'>Offering innovative products with bioavailability </p>
                <p className='text-intro-background'>Maximized for Efficiency focused and deep assured</p>
            </div>
            <div className='container-content-global-home'>
                <div className='container-expert-content'>
                    <img className='img-drop' alt='expert' src={drop} />
                    <div className='container-text-expert-content'>
                        <h2 className='title-expert-content'>innovation and efficacity
                            at the heart of cosmetics </h2>
                        <p className='text-expert-content'>At Akore Formulations, we’re revolutionizing the world of cosmetics through innovation and scientific expertise. We use niosome technology to push back the boundaries of cosmetic efficacy.
                        </p>
                        <p className='text-expert-content'>Compared to traditional cosmetic formulations, niosome-based cosmetics offer numerous advantages, delivering active ingredients into the skin’s deepest layers for rapid, long-lasting action.</p>
                        <Link to='/produits' className='button-expert-content'>
                            Discover our products
                        </Link>
                    </div>
                </div>
                <div className='akore-home-container-2'>
                    <div className='container-liposome-advantage'>
                        <div className='container-content-liposome-advantag'>
                            <h2 className='title-liosome'>What’s a niosome ?</h2>
                            <p className='home-p-desc align-justified'>
                                Niosomes are non-ionic encapsulation systems designed to enhance the delivery of active ingredients to the skin.
                                Thanks to their unique structure, they effectively encapsulate ingredients, enabling controlled release and improved skin penetration.
                                The result is a significant increase in the efficacy of cosmetic products, while ensuring optimum protection of sensitive active ingredients.
                            </p>
                        </div>
                        <img className='akore-container-2-img' alt='avantages' src={liposomeSchema} />
                    </div>
                    <div className='container-liposome-advantage'>
                        <div className='container-content-liposome-advantag'>
                            <h2 className='title-liosome'>Our expertise</h2>
                            <p className='home-p-desc align-justified'>
                                Our laboratory is at the forefront of research and development in the field of niosomes.
                                We work closely with experts in dermatology and cosmetic formulation to create products that meet the specific needs of our customers.
                                Our development process incorporates the latest scientific advances to guarantee unprecedented results.
                            </p>
                        </div>
                        <div className='container-content-liposome-advantag'>
                            <h2 className='title-liosome'>Our commitments</h2>
                            <p className='home-p-desc-2'>
                                Innovation : We are committed to developing cutting-edge solutions that set new standards in the cosmetics industry.
                            </p>
                            <p className='home-p-desc-2'>
                                Quality : Each product is the result of in-depth research and rigorous quality control, ensuring safety and efficacy.
                            </p>
                            <p className='home-p-desc-2'>
                                Customisation : We offer tailor-made services to meet the unique requirements of each brand, enabling it to stand out from the crowd, from raw material to finished products
                            </p>
                        </div>
                    </div>
                </div>
                <div className='akore-home-container-3'>
                    <div className='akore-home-icone-text'>
                        <img className='icone-container-3' alt='icone goutte' src={icon1} />
                        <h3>Powerful,</h3>
                        <h3>profound</h3>
                        <h3>effectiveness</h3>
                    </div>
                    <div className='akore-home-icone-text'>
                        <img className='icone-container-3' alt='icon molécule graphe' src={icon2}/>
                        <h3>Long-Lasting Action :</h3>
                        <h3>Controlled </h3>
                        <h3>& Prolonged Release,</h3>
                    </div>
                    <div className='akore-home-icone-text'>
                        <img className='icone-container-3' alt='icone loupe plante' src={icon3}/>
                        <h3>Optimum</h3>
                        <h3>Stability of Active</h3>
                        <h3>Ingredients</h3>
                    </div>
                    <div className='akore-home-icone-text'>
                        <img className='icone-container-3' alt='icone bouclier' src={icon4}/>
                        <h3>Biocompatibility,</h3>
                        <h3>& Skin-Friendly</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}