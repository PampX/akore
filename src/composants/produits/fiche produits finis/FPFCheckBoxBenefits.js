import commonStyle from '../../../utils/css/produits/ProductCommon.css'
import style from '../../../utils/css/produits/fiche produits finis/FPFCheckBoxBenefits.css'
import {useMediaQuery} from "react-responsive";

export default function FPFCheckBoxBenefits({}) {
    const isPhone = useMediaQuery({query: '(max-width: 750px)'})

    return (
        <div className={isPhone?"checkbox-square checkbox-phone":"checkbox-square"}>
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
    )
}
