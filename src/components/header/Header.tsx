import {FC} from "react";
import './index.css'
import './index.adaptive.css'
import {BurgerMenu} from "@components/utils/burger-menu/BurgerMenu.tsx";
import {useLayout} from "@context/UseLayout.tsx";

export const Header: FC = () => {
    const {handleBurgerToggle} = useLayout()

    return (
        <>
            <div className={`header`}>
                <div className={`nav-sec`}>
                    <span>
                        <a className={`nav-hover`} href="#main">Главная</a>
                    </span>
                    <span>
                        <a className={`nav-hover`} href="#about-us">О нас</a>
                    </span>
                    <span>
                        <a className={`nav-hover`} href="#gallery">Галерея</a>
                    </span>
                </div>

                <div className={`logo`}></div>

                <div className={`pos-burger`}>
                    <BurgerMenu onToggle={handleBurgerToggle}/>
                </div>

                <div className={`nav-sec`}>
                    <span>
                        <a className={`nav-hover`} href="#schedule">Расписание</a>
                    </span>
                    <span>
                        <a className={`nav-hover`} href="#reviews">Отзывы</a>
                    </span>
                    <span>
                        <a className={`nav-hover`} href="#contact">Контакты</a>
                    </span>
                </div>
            </div>
        </>
    )
}
