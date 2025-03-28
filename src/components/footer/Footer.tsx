import './index.css';
import './index.adaptive.css';
import {FC} from 'react';
import footerData from '@moki/footer.json';
import {getImageUrl} from '@/libs/utils.ts';

export const Footer: FC = () => {
    const contactInfo = footerData.find(item => item.header);
    const socialIcons = footerData.find(item => item.icon)?.icon || [];
    const addresses = footerData.find(item => item.address)?.address || [];

    return (
        <div className={`pos-footer`}>
            {contactInfo && (
                <div className={`block`}>
                    <h1 className={`header-footer`}>{contactInfo.header}</h1>
                    <span className={`span-footer`}>
                        Телефон: <a href={`tel:${contactInfo.number}`}>{contactInfo.number}</a>
                    </span>
                </div>
            )}

            {socialIcons.length > 0 && (
                <div className={`block-img`}>
                    {socialIcons.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="img-social-link"
                            style={{backgroundImage: `url('${getImageUrl(item.img, 'svg')}')`}}
                        />
                    ))}
                </div>
            )}

            {addresses.length > 0 && (
                <div className={`block`}>
                    <h1 className={`text-[20px] font-bold`}>Адрес:</h1>
                    {addresses.map((addr, index) => (
                        <span key={index} className={`span-footer`}>
                            {addr}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};
