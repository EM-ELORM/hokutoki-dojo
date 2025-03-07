import './index.css'
import './index.adaptive.css'

interface WhiteArrowProps {
    size?: string;
}

export const RightArrow = ({size}: WhiteArrowProps) => {
    return (
        <div
            style={{width: `var(${size})`}}
            className={`right-arrow`}
        />
    );
};