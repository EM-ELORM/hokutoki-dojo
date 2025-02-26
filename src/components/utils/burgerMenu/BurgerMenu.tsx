import './index.css'
import './index.adaptive.css'
import {useState} from "react";

export const BurgerMenu = ({onToggle}: { onToggle: (isOpen: boolean) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        onToggle(newState);
    };

    return (
        <div>
            <input
                type={`checkbox`}
                id={`burger-checkbox`}
                className={`burger-checkbox`}
                checked={isOpen}
                onChange={handleClick}
            />
            <label className={`burger`} htmlFor={`burger-checkbox`}></label>
        </div>
    );
};
