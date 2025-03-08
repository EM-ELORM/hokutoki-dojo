import React, {ReactNode} from "react";

export interface dataProps {
    name: string,
    phone: string,
    socialLink: string | null,
    training: string,
    trainer: string
}

export interface TrainerModalProps {
    bgButtonTrainer?: string
    trainerId?: string
}

export interface ScheduleAdaptiveProps {
    headers: {
        desc: string;
        weekday: string[];
    }[];
    selectedSchedule?: {
        id: number;
        schedule: {
            lessons: string;
            times: string[];
            color: string;
            trainerId: number;
        }[];
    };
}

export interface LayoutContextProps {
    isOpenNavModal: boolean;
    handleBurgerToggle: () => void;
    isOpenTrainerModal: boolean;
    handleOpenTrainerModal: ({trainerId}: HandleOpenTrainerModalProps) => void;
    setIsOpenTrainerModal: React.Dispatch<React.SetStateAction<boolean>>;
    trainerId: number;
}

export interface LayoutProviderProps {
    children: ReactNode;
}

export interface HandleOpenTrainerModalProps {
    trainerId: number
}

export interface PriceProps {
    trainerId?: number | null;
    textColor?: string | null;
    mt?: string | null;
}

export interface Trainer {
    id: number;
    color: string;
    trainer: {
        name: string;
        phone: string;
        img: string;
        chatId: string
    };
    description: string;
}

export interface CustomSectionPropsOne {
    header?: string
    descSection?: string
    children?: React.ReactNode
    id: string
}

export interface CustomSectionPropsTwo {
    header?: string
    descSection?: string
    children?: React.ReactNode
    width?: string
    id: string
}

export interface WhiteArrowProps {
    size?: string;
}