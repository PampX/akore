import commonStyle from '../../utils/css/produits/ProductCommon.css'
import style from '../../utils/css/produits/MPCheckBoxBenefits.css'
import {useMediaQuery} from "react-responsive";

export default function MPCheckBoxBenefits({}) {
    const isPhone = useMediaQuery({query: '(max-width: 750px)'})

    return (
        <div className={isPhone?"benefits-MP-check checkbox-square checkbox-phone":"benefits-MP-check checkbox-square"}>
            <h4 className='text title'>PREMIUM NIOSOMAL ACTIVE INGREDIENTS</h4>
            <div className='check-line'>
                <p className='check-mark'> ✓ </p>
                <p className='text'> High concentration & assimilation </p>
            </div>
            <div className='check-line'>
                <p className='check-mark'> ✓ </p>
                <p className='text'> Fast-acting & long-lasting </p>
            </div>
            <h4 className='text title'>100% PURE & CLEAN</h4>
            <div className='check-line'>
                <p className='check-mark'> ✓ </p>
                <p className='text'>Fragrance-free</p>
            </div>
            <div className='check-line'>
                <p className='check-mark'> ✓ </p>
                <p className='text'>Not tested on animals - Non-irradiated</p>
            </div>
        </div>
    )
}
