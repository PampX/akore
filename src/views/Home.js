import { useEffect, useState } from 'react';
import ListProduct from '../composants/produits/ListProduct';
import '../utils/css/home.css';
import '../utils/css/akore.css'
import imgArticulation from '../images/home/molecules-articulation.png';
import imgSommeil from '../images/home/molecules-sommeil.png';
import imgRespiratoires from '../images/home/molecules-voies-respiratoires.png';
import imgStress from '../images/home/molecules-anti-stress.png';
import imgIntro from '../images/AKORE-img/Home/femme-desert.jpg';
import imgAvantages from '../images/home/avantage-img.png';
import imgAvantages2 from '../images/home/avantage-img2.png';
import imgPhopholipide from '../images/home/phospholipide-img.png';
import imgPhopholipide2 from '../images/home/phospholipide-img2.png';
import videoMolecule from '../videos/vod.mp4'
import NotificationBar from '../composants/NotificationBar'
import ChatBot from '../composants/ChatBot'
import { Link } from 'react-router-dom';

import drop from '../images/AKORE-img/Home/drop-flacon.png'
import hyaluronic from '../images/AKORE-img/Home/serum-HYALURONIC-ACID.png'
import liposomeSchema from '../images/AKORE-img/Home/liposome-schema.png'

export default function Home() {
    const [showChat, setShowChat] = useState(false);
    const [hasNotification, setHasNotification] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [notificationBarStyle, setNotificationBarStyle] = useState({});

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight, })
        if (windowSize.height < 700) {
            setNotificationBarStyle({
                bottom: showChat ? '560px' : '20px',
                cursor: showChat ? 'default' : 'pointer',
            });
        } else {
            setNotificationBarStyle({
                bottom: showChat ? '722px' : '20px',
                cursor: showChat ? 'default' : 'pointer',
            });
        }
    }, [windowSize.height, showChat]);


    const handleNotificationClick = () => {
        setShowChat(true);
    };

    const handleCloseChat = () => {
        setShowChat(false);
        setHasNotification(false)
    };

    const handleNewMessage = () => {
        setHasNotification(true);
    };

    const jsonProduct = [
        { name: "ARTICULATION", description: "Santé des articulations et mobilité", url: imgArticulation },
        { name: "SOMMEIL", description: "Relaxation", url: imgSommeil },
        { name: "VOIES RESPIRATOIRES", description: "Respiration & système immunitaire", url: imgRespiratoires },
        { name: "ANTI-STRESS", description: "Résistance physique & mentale", url: imgStress }
    ];

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
                <div className='container-liposome-advantage'>
                    <div className='container-content-liposome-advantag'>
                        <h2 className='title-liposome-advantag'>What’s a niosome ?</h2>
                        <p className='home-p-desc'>
                            Niosomes are non-ionic encapsulation systems designed to enhance the delivery of active ingredients to the skin.
                            Thanks to their unique structure, they effectively encapsulate ingredients, enabling controlled release and improved skin penetration.
                            The result is a significant increase in the efficacy of cosmetic products, while ensuring optimum protection of sensitive active ingredients.
                        </p>
                    </div>
                    <img className='img-liposome-advantag' alt='avantages' src={liposomeSchema} />
                </div>
                <div className='container-liposome-advantage'>
                    <div className='container-content-liposome-advantag'>
                        <h2 className='title-liposome-advantag'>Our expertise</h2>
                        <p className='home-p-desc'>
                            Our laboratory is at the forefront of research and development in the field of niosomes.
                            We work closely with experts in dermatology and cosmetic formulation to create products that meet the specific needs of our customers.
                            Our development process incorporates the latest scientific advances to guarantee unprecedented results.
                        </p>
                    </div>
                    <div className='container-content-liposome-advantag'>
                        <h2 className='title-liposome-advantag'>Our commitments</h2>
                        <p className='home-p-desc'>
                            Innovation : We are committed to developing cutting-edge solutions that set new standards in the cosmetics industry.

                            Quality : Each product is the result of in-depth research and rigorous quality control, ensuring safety and efficacy.

                            Customisation : We offer tailor-made services to meet the unique requirements of each brand, enabling it to stand out from the crowd, from raw material to finished products
                        </p>
                    </div>
                </div>
                <div className='container-shema-Vtab'>
                    <img className='img-schema-avantage-mobile' alt='avantages2' src={imgAvantages2} />
                </div>
                <div className='container-video'>
                    <video autoPlay loop muted playsInline>
                        <source src={videoMolecule} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                </div>
                <div className='container-process'>
                    <div className='container-liposome-content'>
                        <h2 className='title-liposome-content'>Qu’est-ce qu’un liposome ?</h2>
                        <p className='text-liposome-content'>Le liposome, créé à partir de phospholipides, est une minuscule particule composée de
                            bicouches lipidiques, une partie polaire hydrophile et d’une partie hydrophobe, permettant
                            d’encapsuler efficacement l’actif et ressemblant à la membrane cellulaire.
                            <br /><br />
                            Il est capable d’encapsuler des substances hydrophiles dans son centre aqueux et des
                            substances hydrophobes dans sa bicouche lipidique, les protégeant ainsi de la dégradation
                            digestive permettant aux nutriments d’atteindre directement les cellules, maximisant leur
                            efficacité et leur absorption.
                            <br /><br />
                            Les liposomes sont utilisés pour transporter des ingrédients actifs directement dans les
                            couches profondes de la peau. Ils améliorent l’absorption des nutriments essentiels tels que
                            les vitamines, les minéraux et les acides gras oméga.
                            <br /><br />
                            Les recherches sur les liposomes se poursuivent pour développer des systèmes
                            d’assimilation encore plus efficaces et ciblés.</p>
                    </div>
                    <img className='img-liposome-content' alt='phospholipide' src={imgPhopholipide} />
                </div>
                <div className='container-phospholipide'>
                    <img className='img-phospholipide' alt='phospholipide2' src={imgPhopholipide2} />
                    <div className='container-text-phospholipide'>
                        <h2 className='title-phospholipide'>Qu’est-ce que les phospholipides ?</h2>
                        <p className='text-phospholipide'>Les phospholipides, un groupe de lipides essentiels, jouent un rôle crucial dans le maintien
                            de la santé cellulaire et la fonctionnalité des membranes biologiques.
                            <br /><br />
                            Ce sont les principaux constituants des membranes cellulaires, offrant flexibilité et intégrité
                            à la cellule. Ils participent à la régulation du passage des substances entre l’intérieur et l’extérieur de la cellule.
                            <br /><br />
                            Les phospholipides tels que la lécithine jouent un rôle important dans la biodisponibilité et
                            l’absorption des nutriments.</p>
                    </div>
                </div>
                <div className='container-engagment'>
                    <p className='text-engagment'>Notre équipe s'engage pour l'excellence scientifique.</p>
                </div>
                <ListProduct json={jsonProduct} />
                <div className='button-view-product '>
                    <Link to='/produits' className='button-expert-content-bis'>
                        Voir nos produits
                    </Link>
                </div>
            </div>
            <div className="app">
                {/* <div>
                    <NotificationBar hisOpen={showChat} hasNotification={hasNotification} onClose={handleCloseChat} onClick={handleNotificationClick} style={notificationBarStyle} />
                    {showChat && <ChatBot hisOpen={showChat} onNewMessage={handleNewMessage} />}
                </div> */}
            </div>
        </div>
    )
}