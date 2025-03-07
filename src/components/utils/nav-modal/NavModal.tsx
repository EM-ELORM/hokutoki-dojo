import './index.css'

export const NavModal = () => {
    return (
        <div className={`modal-screen`}>
            <div className={`nav-modal`}>
                <div className={`pos-content-burger-menu`}>
                <span className={`nav-hover`}>
                    <a href="">Главная</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="">О нас</a>
                </span>
                    <span className={`nav-hover`}>
                    <a href="">Галерея</a>
                </span>
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
        </div>
    );
};