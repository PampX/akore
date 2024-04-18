import commonStyle from '../../utils/css/produits/ProductCommon.css'
import style from '../../utils/css/produits/NiosomalTechnoParagraph.css'
import {useMediaQuery} from "react-responsive";

export default function NiosomalTechnoParagraph({}) {
    const isPhone = useMediaQuery({query: '(max-width: 750px)'})

    return (
        <div className={isPhone?"niosomal-techno niosomal-phone": "niosomal-techno"}>
            <h3 className='text title'>NIOSOMAL TECHNOLOGY®</h3>
            <p className="text pargraph">At Akore Formulations, we're revolutionizing the world of cosmetics through
                innovation and scientific expertise. We use niosome technology to push back the boundaries of cosmetic
                efficacy.</p>
            <p className="text pargraph">This non-ionic encapsulation system is designed to enhance the delivery of
                active ingredients to the skin. Thanks to their unique structure, they effectively encapsulate
                ingredients, enabling controlled release and better penetration into the skin.</p>
            <p className="text pargraph">The result is a significant increase in the efficacy of cosmetic products,
                while ensuring optimum protection of sensitive active ingredients. <br/>
                In collaboration with dermatology experts, we offer highly concentrated, premium-quality cosmetics.</p>
        </div>
    )
}
