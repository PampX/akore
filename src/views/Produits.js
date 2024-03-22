import React, {useEffect, useState} from 'react';
import '../utils/css/produits.css';
import ProduitCard from "../composants/ProduitCard";

const images = {
    articulation: require('../images/home/molecules-articulation.png'),
    sommeil: require('../images/home/molecules-sommeil.png'),
    respiratoires: require('../images/home/molecules-voies-respiratoires.png'),
    stress: require('../images/home/molecules-anti-stress.png'),
    multi: require('../images/home/molecules-multivit-mineraux.png'),
    circulation: require('../images/home/molecules-circulation.png'),
    detox: require('../images/home/molecules-detoxl.png'),
    capillaire: require('../images/home/molecules-capillaire.png'),
    jetLag: require('../images/home/molecules-jet-lag.png'),
    minceur: require('../images/home/molecules-minceur.png'),
    energie: require('../images/home/molecules-energie.png'),
    immunite: require('../images/home/molecules-immunite.png'),
};

const finishedProducts = [
    { name: "articulation", key: "articulation", desc: "Améliore la mobilité", desc2: "Confort articulaire · Flexibilité", path: "/articulation", shortDesc: "Blemish-control", imgName: "molecules-articulation.png" },
    { name: "sommeil", key: "sommeil", desc: "Réduit le temps d'endormissement", desc2: "Sommeil réparateur · Relaxation · Endormissement", path: "/sommeil", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
    { name: "voies respiratoires", key: "respiratoires", desc: "Respiration facilitée", desc2: "Système immunitaire & respiratoire · Vitalité", path: "/voies-respiratoires", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
    { name: "anti-stress", key: "stress", desc: "Résistance physique & mentale", desc2: "Sérénité · Détente · Energie · Performance", path: "/anti-stress", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
    { name: "multivitamines", key: "multi", desc: "Réduit la fatigue", desc2: "Système immunitaire · Equilibre hormonal & nerveux · Performance", path: "/multivitamines-et-mineraux", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
    { name: "circulation", key: "circulation", desc: "Jambes légères", desc2: "Circulation veineuse · Lymphatique · Antioxydant · Vasoprotecteur", path: "/circulation", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
];

const rawProducts = [
    { name: "détox", key: "detox", desc: "Favorise la digestion", desc2: "Détox du foie · Digestion · Purification", path: "/detox", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
    { name: "capillaire", key: "capillaire", desc: "Croissance & force", desc2: "Beauté & croissance des cheveux · Anti-chute · Pigmentation", path: "/capillaire", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
    { name: "jet lag", key: "jetLag", desc: "Décalage horaire", desc2: "Décalage horaire · Rapidité endormissement · Régulation du cycle circadien", path: "/jet-lag", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
    { name: "minceur", key: "minceur", desc: "Aide à augmenter la dépense énergétique", desc2: "Brûle-graisses · Perte de poids · Digestion", path: "/minceur", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
    { name: "énergie", key: "energie", desc: "Résistance à la fatigue mentale & physique", desc2: "Dynamisant · Equilibre énergétique · Système nerveux", path: "/energie", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
    { name: "immunité", key: "immunite", desc: "Système immunitaire préservé", desc2: "Système immunitaire · Protection stress oxydatif · Métabolisme · Vitalité", path: "/immunite", shortDesc: "Blemish-control", imgName: "molecules-articulation.png"  },
];

export default function Produits() {
    const [, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='container-all'>
            <div className='container-product-all'>
                {rawProducts.map((product, index) => (
                        <ProduitCard
                            key={index}
                            name={product.name}
                            shortDesc={product.shortDesc}
                            desc={product.desc}
                            desc2={product.desc2}
                            path={product.path}
                            imgName={product.imgName}
                        />
                ))}
            </div>
        </div>
    );
}
