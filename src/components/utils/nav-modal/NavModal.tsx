import './index.css'
import {useLayout} from "@context/UseLayout.tsx";

export const NavModal = () => {
    const {handleBurgerToggle} = useLayout()
    return (
        <div className={`modal-screen`}>
            <div className={`nav-modal`}>
                <button className={`close`} onClick={() => handleBurgerToggle()}></button>
                <div className={`pos-content-burger-menu`}>
                <span className={`nav-hover`}>
                    <a href="#main">Главная</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="#about-us">О нас</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="#gallery">Галерея</a>
                </span>
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
        </div>
    );
};