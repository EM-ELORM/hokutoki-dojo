import {createContext, FC, useState} from 'react'
import {HandleOpenTrainerModalProps, LayoutContextProps, LayoutProviderProps} from "@/interface";

export const LayoutContext = createContext<LayoutContextProps | undefined>(undefined)

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