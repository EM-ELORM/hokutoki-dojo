import './index.css'
import './index.adaptive.css'
import {FC} from "react";
import {ContactForm} from "@components/forms/ContactForm.tsx";
import {RightArrow} from "@components/utils/rightArrow/RightArrow.tsx";

export const ContactUs: FC = () => {
    return (
        <div className={`pos-contact-us`}>
            <div className={`pos-block-one`}>
                <h1 className={`header-block-one`}>Остались вопросы ?</h1>
                <span className={`desc-block-one`}>Оставьте заявку на обратную связь</span>
                <RightArrow size={`--size-contact-line`}/>
            </div>
            <ContactForm/>
        </div>
    )
}
