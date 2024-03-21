import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../utils/css/pdv.css'

import MapPDV from '../composants/MapPDV';
import MapPDVPhone from '../composants/MapPDVPhone';

const PDVLocations = [
    {"name": "GIE G5 LANGUEDOC", "position": [43.802800, 4.339100],"address": "DEPOT G5\nENTREPOT C1-1\n556 CHE DU MAS DE CHEYLON NIMES 30900"
    },
    {"name": "GRANDE PHARMACIE DE L'ESPLANADE", "position": [43.834830, 4.363560],"address": "9 BOULEVARD DE PRAGUE NIMES 30000"
    },
    {"name": "GRANDE PHARMACIE DE PROVENCE", "position": [43.663300, 7.150690],"address": "1 PLACE DU GENERAL DE GAULLE CAGNES / MER 06800"
    },
    {"name": "GRANDE PHARMACIE DU 8 MAI", "position": [43.411210, 5.213860],"address": "AVENUE DU 8 MAI 1945 MARIGNANE 13700"
    },
    {"name": "GRANDE PHARMACIE DU PORT", "position": [49.286460, -0.097220],"address": "9 PLACE DE LA REPUBLIQUE SANARY/MER 83110"
    },
    {"name": "GRANDE PHARMACIE DU TALABOT", "position": [43.838530, 4.372290],"address": "53 RUE DE BEAUCAIRE NÎMES 30000"
    },
    {"name": "GRANDE PHARMACIE ROCADE SUD", "position": [44.105530, 4.089090],"address": "AVENUE OLIVIER DE SERRES ALES 30100"
    },
    {"name": "LA GRANDE PHARMACIE D'ODYSSEUM", "position": [43.605350, 3.919910],"address": "2 PLACE DE LISBONNE CCIAL ODYSSEUM MONTPELLIER 34000"
    },
    {"name": "LA GRANDE PHARMACIE PRINCIPALE", "position": [43.697690, 7.267460],"address": "8 / 10 RUE MASSÉNA NICE 06000"
    },
    {"name": "LA PHARMACIE DU GOLFE", "position": [43.172150, 6.530510],"address": "219 AVENUE DES ALLIES CAVALAIRE-SUR-MER 83240"
    },
    {"name": "MC PHARMA", "position": [42.640690, 2.756860],"address": "AVENUE DE LA PADROUSE THUIR 66300"
    },
    {"name": "PARADIS BODY", "position": [45.366540, 5.591710],"address": "CCIAL CARREFOUR VOIRON 38500"
    },
    {"name": "PHARMACIE AYROLLES FERRE", "position": [43.253220, 2.367130],"address": "10 AVENUE  LEO LAGRANGE VILLEMOUSTAUSSOU 11620"
    },
    {"name": "PHARMACIE BEAU SOLEIL NIMES", "position": [43.828700, 4.372690],"address": "61 AV GENERAL LECLERC NIMES 30000"
    },
    {"name": "PHARMACIE BEAUJARD", "position": [46.885690, 1.859610],"address": "11 PLACE DE LA MAIRIE NEUVY-PAILLOUX 36100"
    },
    {"name": "PHARMACIE CAMBON", "position": [43.905360, 1.687860],"address": "2 RUE GERARD ROQUES SALVAGNAC 81630"
    },
    {"name": "PHARMACIE CARBONNEL", "position": [43.822420, 4.364100],"address": "226 ALLEE DE SEVILLE NIMES 30900"
    },
    {"name": "PHARMACIE CENTRALE LEPIDI", "position": [43.120590, 6.130230],"address": "16 AVENUE GENERAL DE GAULLE HYÈRES 83400"
    },
    {"name": "PHARMACIE CHAMPANET", "position": [43.926320, 2.130610],"address": "PLACE DE LA MALADRERIE ALBI 81000"
    },
    {"name": "PHARMACIE CHARPENEL", "position": [43.698280, 7.259880],"address": "45 BOULEVARD VICTOR HUGO NICE 06000"
    },
    {"name": "PHARMACIE CLOTIS", "position": [42.600690, 2.971900],"address": "56 ROUTE NATIONALE ELNE 66200"
    },
    {"name": "PHARMACIE DE GASCOGNE", "position": [43.658000, 0.591610],"address": "54 RUE DU 8 MAI AUCH 32000"
    },
    {"name": "PHARMACIE DE L'AVENUE  SIGEAN", "position": [43.029020, 2.977990],"address": "26 AVENUE DE NARBONNE SIGEAN 11130"
    },
    {"name": "PHARMACIE DE L'ECLUSE", "position": [44.316460, 4.750940],"address": "ANCIENNE ROUTE DE SAINT PAUL CCIAL LECLERC BOLLENE 84500"
    },
    {"name": "PHARMACIE DE L'ETOILE MARSEILLE", "position": [43.347230, 5.450250],"address": "107 BOULEVARD BARA MARSEILLE 13013"
    },
    {"name": "PHARMACIE DE L'HÔTEL DE VILLE VITROLLES", "position": [43.447750, 5.249660],"address": "PLACE DE L'HOTEL DE VILLE VITROLLES 13127"
    },
    {"name": "PHARMACIE DE LA GARE RUMILLY", "position": [45.859340, 5.948070],"address": "10 RUE DE L ALBANAIS RUMILLY 74150"
    },
    {"name": "PHARMACIE DE LA GARE VENCE", "position": [43.724140, 7.105930],"address": "126 AVENUE RHIN ET DANUBE VENCE 06140"
    },
    {"name": "PHARMACIE DE LA HALLE REVEL", "position": [43.460680, 2.005450],"address": "2 AVENUE DE CASTRES REVEL 31250"
    },
    {"name": "PHARMACIE DE LA HAUTE VALLEE DE L HERS", "position": [42.903380, 1.933890],"address": "3 AVENUE DE LAVELANET BELESTA 09300"
    },
    {"name": "PHARMACIE DE LA MAISON CARREE", "position": [43.838510, 4.355570],"address": "2 - 4 BD ALPHONSE DAUDET NIMES 30000"
    },
    {"name": "PHARMACIE DE LA PIERRE PERCEE", "position": [44.961820, 5.741070],"address": "12 ROUTE DU PONTET LA MOTTE-D'AVEILLANS 38770"
    },
    {"name": "PHARMACIE DE LA PROMENADE ROQUEBRUNE", "position": [43.760650, 7.483700],"address": "37 PROMENADE ROBERT SCHUMAN ROQUEBRUNE CAP MARTIN 06190"
    },
    {"name": "PHARMACIE DE LA REINE JEANNE", "position": [43.640300, 5.086390],"address": "CCIAL INTERMARCHE SALON DE PROVENCE 13300"
    },
    {"name": "PHARMACIE DE L’ORCHIDÉE", "position": [45.233850, 5.882250],"address": "62 AVENUE ARISTIDE BERGES VILLARD-BONNOT 38190"
    },
    {"name": "PHARMACIE DE MONTBETON", "position": [44.010850, 1.288770],"address": "496 ROUTE DE MONTAUBAN MONTBETON 82290"
    },
    {"name": "PHARMACIE DE ROBION", "position": [43.848440, 5.111480],"address": "216 AVENUE ARISTIDE BRIAND ROBION 84440"
    },
    {"name": "PHARMACIE DE SAINT GENIES DE MALGOIRES", "position": [43.945280, 4.229850],"address": "LES GOUSATS LOT L AVENIR SAINT-GENIES-DE-MALGOIRES 30190"
    },
    {"name": "PHARMACIE DE TRINQUETAILLE", "position": [43.680430, 4.620410],"address": "14 RUE DE LA VERRERIE ARLES 13200"
    },
    {"name": "PHARMACIE DE VALBONNE", "position": [43.641890, 7.006390],"address": "2 PLACE DE LA VIGNASSE VALBONNE  VILLAGE 06560"
    },
    {"name": "PHARMACIE DES 4 SEIGNEURS", "position": [43.637900, 3.859480],"address": "675 AVENUE ABBE PAUL PARGUEL MONTPELLIER 34090"
    },
    {"name": "PHARMACIE DES ARENES LUNEL", "position": [43.674060, 4.132250],"address": "74 QUAI VOLTAIRE LUNEL 34400"
    },
    {"name": "PHARMACIE DES BOULEVARD CAGNES", "position": [43.656070, 7.151080],"address": "64 BOULEVARD MARÉCHAL JUIN CAGNES 06800"
    },
    {"name": "PHARMACIE DES CORBIERES", "position": [43.087230, 2.703510],"address": "57 Q AVENUE DE NARBONNE SAINT-LAURENT-DE-LA-CABRERISSE 11220"
    },
    {"name": "PHARMACIE DES ECOLES CUXAC D'AUDE", "position": [43.245920, 3.000410],"address": "14 BOULEVARD DE VINGRE CUXAC D'AUDE 11590"
    },
    {"name": "PHARMACIE DES FONTAINES", "position": [42.536430, 2.924880],"address": "2 PLACE JOSEPH CAVAILLE SAINT-GENIS-DES-FONTAINES 66740"
    },
    {"name": "PHARMACIE DES MAGNOLIAS MEZE", "position": [43.425180, 3.601710],"address": "17 AVENUE DU GÉNÉRAL DE GAULLE MEZE 34140"
    },
    {"name": "PHARMACIE DES MAGNOLIAS NICE", "position": [43.680800, 7.219700],"address": "121 BIS BOULEVARD NAPOLÉON III NICE 06200"
    },
    {"name": "PHARMACIE DES MANADES", "position": [43.637460, 4.806610],"address": "64 AVENUE DE LA REPUBLIQUE ST MARTIN DE CRAU 13310"
    },
    {"name": "PHARMACIE DES MOULINS REGUSSE", "position": [43.655910, 6.130450],"address": "30 COURS ALEXANDRE GARIEL REGUSSE 83630"
    },
    {"name": "PHARMACIE DU BEC D'ALLIER", "position": [46.981470, 3.093420],"address": "2 B RUE DES CHARRONS MARZY 58180"
    },
    {"name": "PHARMACIE DU CAPDE GASCOGNE", "position": [43.748760, -0.561010],"address": "LIEU DIT LOUSTALOT ZONE ESCALES SAINT-SEVER 40500"
    },
    {"name": "PHARMACIE DU CENTRE LECLERC", "position": [43.629140, 5.104510],"address": "CCIAL LES VIOUGUES SALON DE PROVENCE 13300"
    },
    {"name": "PHARMACIE DU CENTRE NAYRAL", "position": [43.383420, 5.165000],"address": "21 AVENUE DU 4 SEPTEMBRE CHATEAUNEUF LES MARTIGUES 13220"
    },
    {"name": "PHARMACIE DU CENTRE PEROLS", "position": [43.562020, 3.952100],"address": "85 ALLEE JACQUES BREL PEROLS 34470"
    },
    {"name": "PHARMACIE DU CHATEAU BOUSSAC", "position": [46.349420, 2.217810],"address": "5 AVENUE PIERRE LEROUX BOUSSAC 23600"
    },
    {"name": "PHARMACIE DU DUCHE", "position": [44.011260, 4.412850],"address": "28 AVENUE DE LA GARE UZES 30700"
    },
    {"name": "PHARMACIE DU GEANT ISTRES", "position": [43.497161, 4.977381],"address": "CCIAL GÉANT CASINO ISTRES 13800"
    },
    {"name": "PHARMACIE DU JARDIN EXOTIQUE", "position": [43.734770, 7.414280],"address": "31 AVENUE HECTOR OTTO MONACO 98000"
    },
    {"name": "PHARMACIE DU LANGUEDOC NARBONNE", "position": [43.162270, 2.982760],"address": "70 ROUTE DEPARTEMENTALE 6009 NARBONNE 11100"
    },
    {"name": "PHARMACIE DU LYCEE VILLENEUVE LES AVIGNON", "position": [43.980980, 4.785130],"address": "AVENUE DE RHEINBACH VILLENEUVE-LES-AVIGNON 30400"
    },
    {"name": "PHARMACIE DU MOULIN A VENT", "position": [42.685040, 2.904690],"address": "17 PLACE MONTBOLO PERPIGNAN 66000"
    },
    {"name": "PHARMACIE DU NOUVEAU GOLF", "position": [43.452280, 6.812790],"address": "CCIAL GOLF ESTEREL ST RAPHAEL 83700"
    },
    {"name": "PHARMACIE DU PERE SOULAS", "position": [43.624930, 3.851130],"address": "1637 AV DU PERE SOULAS MONTPELLIER 34090"
    },
    {"name": "PHARMACIE DU POLYGONE", "position": [43.607920, 3.884410],"address": "71 RUE DES PERTUISANES CCIAL DU POLYGONE MONTPELLIER 34000"
    },
    {"name": "PHARMACIE DU QUERCY", "position": [44.106290, 1.093810],"address": "57 RUE FG SAINTE BLANCH MOISSAC 82200"
    },
    {"name": "PHARMACIE DU VIDOURLE", "position": [43.671940, 4.137210],"address": "29 RUE DE LA ROQUETTE LUNEL 34400"
    },
    {"name": "PHARMACIE DU VIEUX CANAL", "position": [47.626370, 2.749400],"address": "94 ROUTE D OUSSON BRIARE 45250"
    },
    {"name": "PHARMACIE DU VIGUIER", "position": [43.209100, 2.327850],"address": "2 RUE ALAIN FOURNIER CARCASSONNE 11000"
    },
    {"name": "PHARMACIE GOUMARRE", "position": [43.790400, 4.308850],"address": "3 PLACE FREDERIC MISTRAL MILHAUD 30540"
    },
    {"name": "PHARMACIE GROS", "position": [43.441370, 3.680250],"address": "17 AVENUE DU PORT BALARUC LES BAINS 34540"
    },
    {"name": "PHARMACIE JEAN PIERRE", "position": [43.176930, 2.785070],"address": "3 B GRAND RUE LUC-SUR-ORBIEU 11200"
    },
    {"name": "PHARMACIE JOLIVET JEAN", "position": [46.942610, 1.988310],"address": "RUE HAUTE SAINT PATERNE ISSOUDUN 36100"
    },
    {"name": "PHARMACIE LA SALZ", "position": [42.947190, 2.253790],"address": "34 ROUTE DES PYRENEES COUIZA 11190"
    },
    {"name": "PHARMACIE LAFAYETTE DU GRAND SUD OUEST", "position": [44.196740, 0.627020],"address": "49 BD EDOUARD LACOUR AGEN 47000"
    },
    {"name": "PHARMACIE LE DONNE BIGE", "position": [43.372450, 1.419580],"address": "13 CHEMIN LOUBINE MIREMONT 31190"
    },
    {"name": "PHARMACIE LE GARGASSON", "position": [46.847870, 1.536640],"address": "21 RUE DU GÉNÉRAL DE GAULLE VILLEDIEU SUR INDRE 36320"
    },
    {"name": "PHARMACIE LECOMTE ET MASCRE", "position": [47.035640, 2.653200],"address": "6 PLACE  DU DOC TILLET AVORD 18520"
    },
    {"name": "PHARMACIE LUTEVA", "position": [43.724530, 3.321710],"address": "214 ALLEE DANIELLE MITTERAND LODEVE 34700"
    },
    {"name": "PHARMACIE MARTIN CAILLE", "position": [43.659630, 4.634490],"address": "CCIAL FOURCHON ARLES 13200"
    },
    {"name": "PHARMACIE MEDITERRANEE CANET EN ROUSSILLON", "position": [42.694310, 3.034050],"address": "10 AVENUE DE LA MEDITERRANEE CANET EN ROUSSILLON 66140"
    },
    {"name": "PHARMACIE MIRABEAU", "position": [43.447820, 5.684240],"address": "2 AVENUE MIRABEAU TRETS 13530"
    },
    {"name": "PHARMACIE MISTRAL", "position": [43.231760, 3.054520],"address": "17 AVENUE DE TOULOUSE COURSAN 11110"
    },
    {"name": "PHARMACIE NOTRE DAME DE SANTE", "position": [44.060530, 5.048580],"address": "409 AVENUE NOTRE DAME DE SANTE CARPENTRAS 84200"
    },
    {"name": "PHARMACIE NOUVELLE VIERZON", "position": [47.206340, 2.072670],"address": "AVENUE MAL DE LATTRE DE TASSIGNY VIERZON 18100"
    },
    {"name": "PHARMACIE PAUL CEZANNE", "position": [43.539830, 5.448670],"address": "6 AVENUE RAYMOND POINCARRE AIX EN PROVENCE 13090"
    },
    {"name": "PHARMACIE POIROTTE", "position": [42.704050, 2.902200],"address": "31 RUE CLAUDE BERNARD PERPIGNAN 66000"
    },
    {"name": "PHARMACIE POPULAIRE", "position": [43.607670, 3.879470],"address": "4 RUE MAGUELONE MONTPELLIER 34000"
    },
    {"name": "PHARMACIE POUSSARDIN", "position": [43.636860, 5.528530],"address": "1 BIS AVENUE DE LA POURANE MEYRARGUES 13650"
    },
    {"name": "PHARMACIE PRADEN", "position": [44.137990, 4.09756],"address": "ENTREPOT 1 14 BD CHARLES PEGUY ALES 30100"
    },
    {"name": "PHARMACIE PRADO MERMOZ", "position": [43.275300, 5.389340],"address": "244 AVENUE DU PRADO MARSEILLE 13008"
    },
    {"name": "PHARMACIE PRINCIPALE PERTUIS", "position": [43.693510, 5.501420],"address": "114 PLACE JEAN JAURÈS PERTUIS 84120"
    },
    {"name": "PHARMACIE ROUSSEL", "position": [46.765780, 1.717050],"address": "79 AVENUE DE LA FORET LE POINCONNET 36330"
    },
    {"name": "PHARMACIE SAINT JEAN CASTELSARRASIN", "position": [44.041500, 1.104080],"address": "10 PLACE GASTON BENAC CASTELSARRASIN 82100"
    },
    {"name": "PHARMACIE SEILLER", "position": [46.552820, 1.158980],"address": "2 RUE LUCAS BELABRE 36370"
    },
    {"name": "PHARMACIE TALOBRE", "position": [42.988450, 1.139610],"address": "3 AVENUE ARISTIDE BERGES ST GIRONS 09200"
    },
    {"name": "PHARMACIE TOURASSE", "position": [43.310750, -0.349590],"address": "53 BOULEVARD TOURASSE PAU 64000"
    },
    {"name": "PHARMACIE VAUBAN PERPIGNAN", "position": [42.698730, 2.891690],"address": "23 QUAI SÉBASTIEN VAUBAN PERPIGNAN 66000"
    },
    {"name": "PHARMACIE VAUBAN TOULON", "position": [43.127260, 5.928650],"address": "103 AVENUE VAUBAN TOULON 83000"
    }
]

export default function PDVsoon() {
    const location = useLocation();
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 950);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleResize = () => {
            const smallScreen = window.innerWidth <= 950;
            if (smallScreen !== isSmallScreen) {
                setIsSmallScreen(smallScreen);
                if (smallScreen) {
                    window.location.reload();
                }
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSmallScreen, location.pathname]);

    return (
        <div className='pdv-container'>
            <h2 className='pdv-h2'>TROUVEZ NOS REVENDEURS OFFICIELS</h2>
            <div className='pdv-map-container'>
                <div className='pdv-map-div'>
                    {isSmallScreen ?
                        <MapPDVPhone PDVLocations={PDVLocations} />
                        :
                        <MapPDV PDVLocations={PDVLocations} />
                    }
                    <p className='pdv-map-p'>Vous êtes une pharmacie et souhaitez revendre nos produits ? Contactez-nous à 
                    <a className='mailto pdvMail' href='mailto:contact@molecules-lab.com'>
                    contact@molecules-lab.com
                    </a>
                    </p> 
                </div>
                <div className='pdv-txt-div'>
                    <h3 className='pdv-txt-h3'>TROUVEZ VOTRE PHARMACIE</h3>
                    <p className='pdv-txt-p'>Sélectionnez un point sur la carte pour obtenir les informations de la pharmacie souhaitée</p>
                </div>
            </div>
        </div>
    );
}
