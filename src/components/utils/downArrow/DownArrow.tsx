import './index.css'

interface RedArrowProps {
    size?: string;
}

export const DownArrow = ({size}: RedArrowProps) => {
    return (
        <div
            style={{height: size}}
            className={`down-arrow`}
        />
    );
};