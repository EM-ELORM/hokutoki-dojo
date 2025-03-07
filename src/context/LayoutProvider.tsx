import React, {createContext, FC, ReactNode, useState} from 'react'

interface LayoutContextProps {
    isOpenNavModal: boolean;
    handleBurgerToggle: () => void;
    isOpenTrainerModal: boolean;
    handleOpenTrainerModal: ({trainerId}: HandleOpenTrainerModalProps) => void;
    setIsOpenTrainerModal: React.Dispatch<React.SetStateAction<boolean>>;
    trainerId: number;
}

export const LayoutContext = createContext<LayoutContextProps | undefined>(undefined)

interface LayoutProviderProps {
    children: ReactNode;
}

interface HandleOpenTrainerModalProps {
    trainerId: number
}

export const LayoutProvider: FC<LayoutProviderProps> = ({children}) => {
    const [isOpenNavModal, setIsOpenNavModal] = useState(false)
    const [isOpenTrainerModal, setIsOpenTrainerModal] = useState(false)
    const [trainerId, setTrainerId] = useState<number>(0)

    const handleBurgerToggle = () => {
        setIsOpenNavModal((prev) => !prev);
    };

    const handleOpenTrainerModal = ({trainerId}: HandleOpenTrainerModalProps) => {
        setIsOpenTrainerModal(true);
        setTrainerId(trainerId)
    }

    return (
        <LayoutContext.Provider
            value={{
                isOpenNavModal,
                handleBurgerToggle,
                isOpenTrainerModal,
                handleOpenTrainerModal,
                setIsOpenTrainerModal,
                trainerId,
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}