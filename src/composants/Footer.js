import '../utils/css/footer.css'
import {useNavigate} from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    const logoImage = require('../images/AKORE WEBSITE/LOGO/Logo AKORE ocre.png')

    const handleNavigate = (where) => {
        navigate(where)
    }


    return (
        <div className='footer-container'>
            <img src={logoImage} alt='akore logo'/>
            <div className='div-footer-menu'>
                <p className='p-footer-menu' onClick={() => handleNavigate('/')}>HOME</p>
                <p className='p-footer-menu' onClick={() => handleNavigate('/produits')}>OUR PRODUCTS</p>
            </div>
        </div>
    )
}