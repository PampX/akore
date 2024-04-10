import commonStyles from  '../../utils/css/produits/ProductCommon.css'
import styles from '../../utils/css/produits/commonList.css'
import expendedArrow from "../../images/AKORE WEBSITE/PICTOS/expended.png";
import expendeMoreArrow from "../../images/AKORE WEBSITE/PICTOS/expend-more.png";
import {useState} from "react";

/**
 * @param items est une liste d'objets de type : {tile: string[], paragraphs: string[]}
 */
export default function List({items}) {

    const [selected, setSelected] = useState(0);

    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <div
                            className={'product-list-title underligned' + (selected === index ? ' selected' : '')}
                            onClick={() => setSelected(index)}
                        >
                            <h3 className='text title'>Ingredients</h3>
                            <img src={selected === index ? expendedArrow : expendeMoreArrow}/>
                        </div>
                        <div>
                            {item.paragraphs.map((paragraph, index) => {
                                return (
                                    <div className='pargraph text' key={index}>
                                        {paragraph}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}