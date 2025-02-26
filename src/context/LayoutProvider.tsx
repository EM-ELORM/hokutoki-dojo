import React, {createContext, ReactNode, useState} from 'react'

interface LayoutContextProps {
    isOpenNavModal: boolean;
    setIsOpenNavModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleBurgerToggle: () => void
}

export const LayoutContext = createContext<LayoutContextProps | undefined>(undefined)

interface LayoutProviderProps {
    children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({children}) => {
    const [isOpenNavModal, setIsOpenNavModal] = useState(false)

    const handleBurgerToggle = () => {
        setIsOpenNavModal((prev) => !prev);
    };

    return (
        <LayoutContext.Provider
            value={{
                isOpenNavModal,
                setIsOpenNavModal,
                handleBurgerToggle
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}