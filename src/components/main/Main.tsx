import './index.css'
import {FC} from "react";
import {Header} from "../header/Header.tsx";
import {DownArrow} from "../downArrow/DownArrow.tsx";

export const Main: FC = () => {
    return (
        <div className={`bg-main`}>
            <div className={`main-center`}>
                <div className={`main-container`}>
                    <Header/>
                    <div className={`text-main`}>
                        <h1 className={`text-h1`}>Hokutoki dojo</h1>
                        <p className={`text-p`}>Сила. Дух. Честь.</p>
                        <p className={`text-p`}>Достоиство.</p>
                    </div>
                    <div className={`mt-4`}>
                        <DownArrow/>
                    </div>
                    <div className={`btn-center`}>
                        <a href={``} className={`btn-red-a`}>
                            Хочу присоединиться
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}