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
                    <a href="">Главная</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="">О нас</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="">Галерея</a>
                </span>
                </div>
                <div className={`logo`}></div>
                <div className={`pos-burger`}>
                    <BurgerMenu onToggle={handleBurgerToggle}/>
                </div>
                <div className={`nav-sec`}>
                <span className={`nav-hover`}>
                    <a href="">Расписание</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="">Отзывы</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="">Контакты</a>
                </span>
                </div>
            </div>
        </>
    )
}
