import commonStyles from  '../../utils/css/produits/ProductCommon.css'
import commonListStyle from '../../utils/css/produits/commonList.css'
import doctorPicto from "../../images/AKORE WEBSITE/PICTOS/doctor.png";
import expendedArrow from "../../images/AKORE WEBSITE/PICTOS/expended.png";
import expendeMoreArrow from "../../images/AKORE WEBSITE/PICTOS/expend-more.png";
import peoplePicto from "../../images/AKORE WEBSITE/PICTOS/people.png";
import noticePicto from "../../images/AKORE WEBSITE/PICTOS/notice.png";
import {useState} from "react";

export default function ProductTripleList({ingredientParagraph, howToUseParagraphsList, precautionsParagraphsList, isMP = false}) {

    const [selected, setSelected] = useState('ingredients');

    return (
        <div>
            {/* ----------------------------------- Ingredients ---------------------------------------------------------------*/}
            <div className={'product-list-title underligned' + (selected === 'ingredients' ? ' selected' : '') + (isMP ? 'mp-image':'')}
                 onClick={() => setSelected('ingredients')}
            >
                <div className='logo-and-image'>
                    <img src={doctorPicto} alt={"logo plus"}/>
                    <h4 className='text title'>Ingredients</h4>
                </div>
                <img src={selected === 'ingredients' ? expendedArrow : expendeMoreArrow}/>
            </div>
            <div className={'text small'}>
                {ingredientParagraph}
            </div>

            {/* ----------------------------------- how to use ---------------------------------------------------------------*/}

            <div className={'product-list-title underligned' + (selected === 'how_to-use' ? ' selected' : '')}
                 onClick={() => setSelected('how_to-use')}
            >
                <div className='logo-and-image'>
                    <img src={peoplePicto} alt={"logo plus"}/>
                    <h4 className='text title'>How to use</h4>
                </div>
                <img src={selected === 'how_to-use' ? expendedArrow : expendeMoreArrow}/>
            </div>
            <div className='small'>
                {howToUseParagraphsList.map((paragraph, index) => {
                    return (
                        <div className='pargraph text' key={index}>
                            {paragraph}
                        </div>
                    )
                })}
            </div>

            {/* ----------------------------------- precautions of use ------------------------------------------------------------*/}
            <div className={'product-list-title underligned' + (selected === 'precautions' ? ' selected' : '')}
                 onClick={() => setSelected('precautions')}
            >
                <div className='logo-and-image'>
                    <img src={noticePicto} alt={"logo plus"}/>
                    <h4 className='text title'>Precautions for use</h4>
                </div>
                <img src={selected === 'precautions' ? expendedArrow : expendeMoreArrow}/>
            </div>
            <div className='small'>
                {precautionsParagraphsList.map((paragraph, index) => {
                    return (
                        <div className='pargraph text' key={index}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                    )
                })}
            </div>
        </div>
    )
}