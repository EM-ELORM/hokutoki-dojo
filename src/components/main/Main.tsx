import './index.css'
import './index.adaptive.css'
import {FC} from "react";
import {useLayout} from "@/context/UseLayout.tsx";
import {Header} from "@components/header/Header.tsx";
import {NavModal} from "@components/utils/nav-modal/NavModal.tsx";
import {TrainerModal} from "@components/utils/trainer-modal/TrainerModal.tsx";
import {DownArrow} from "@components/utils/down-arrow/DownArrow.tsx";

export const Main: FC = () => {
    const {isOpenNavModal, isOpenTrainerModal} = useLayout()

    return (
        <>
            {isOpenNavModal && (<NavModal/>)}
            {isOpenTrainerModal && (<TrainerModal/>)}
            <section id={`main`} className={`bg-main`}>
                <div className={`main-center`}>
                    <div className={`main-container`}>
                        <Header/>
                        <div className={`text-main`}>
                            <h1 className={`text-h1`}>Hokutoki dojo</h1>
                            <p className={`text-p`}>Сила. Дух. Честь.</p>
                            <p className={`text-p`}>Достоинство.</p>
                        </div>
                        <div className={`mt-4`}>
                            <DownArrow size={`var(--size-main-line)`}/>
                        </div>
                        <div className={`btn-center`}>
                            <a href={`#contact`} className={`btn-red-a`}>
                                Хочу присоединиться
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}