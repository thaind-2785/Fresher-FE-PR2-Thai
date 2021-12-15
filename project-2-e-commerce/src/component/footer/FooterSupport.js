import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

function FooterSupport() {
    const { t } = useTranslation()
    return ( 
        <div className='footer-item lg-3 md-6 sm-12'>
            <h3 className='footer-heading'>{t('footer heading support')}</h3>
            <ul>
                <li>
                    <Link to="/">{t('footer contact')}</Link>
                </li>
                <li>
                    <Link to="/">{t('hotline')}</Link>
                </li>
                <li>
                    <Link to="/products">{t('address')}</Link>
                </li>
            </ul>
        </div>
    );
}

export default FooterSupport;
