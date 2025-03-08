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
                <span className={`nav-hover`}>
                    <a href="#main">Главная</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="#about-us">О нас</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="#gallery">Галерея</a>
                </span>
                </div>
                <div className={`logo`}></div>
                <div className={`pos-burger`}>
                    <BurgerMenu onToggle={handleBurgerToggle}/>
                </div>
                <div className={`nav-sec`}>
                <span className={`nav-hover`}>
                    <a href="#schedule">Расписание</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="#reviews">Отзывы</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="#contact">Контакты</a>
                </span>
                </div>
            </div>
        </>
    )
}
