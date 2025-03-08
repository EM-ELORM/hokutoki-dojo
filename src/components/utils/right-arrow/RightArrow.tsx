import './index.css'
import './index.adaptive.css'
import {WhiteArrowProps} from "@/interface";

export const RightArrow = ({size}: WhiteArrowProps) => {
    return (
        <div
            style={{width: `var(${size})`}}
            className={`right-arrow`}
        />
    );
};