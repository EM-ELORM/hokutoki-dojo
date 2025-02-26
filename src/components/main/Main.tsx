import './index.css'
import './index.adaptive.css'
import '../utils/navModal/index.css'
import {FC} from "react";
import {Header} from "../header/Header.tsx";
import {DownArrow} from "../utils/downArrow/DownArrow.tsx";
import {NavModal} from "../utils/navModal/NavModal.tsx";
import {useLayout} from "../../context/UseLayout.tsx";

export const Main: FC = () => {
    const {isOpenNavModal} = useLayout()

    return (
        <>
            {isOpenNavModal && (
                <>
                    <div className={`modal-screen`}>
                        <NavModal/>
                    </div>
                </>
            )}
            <section className={`bg-main`}>
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
                            <a href={``} className={`btn-red-a`}>
                                Хочу присоединиться
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}