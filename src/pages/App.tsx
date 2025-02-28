import {FC} from "react";
import {Main} from "../components/main/Main.tsx";
import {LayoutProvider} from "../context/LayoutProvider.tsx";
import {CustomSection} from "../components/custom-section/CustomSection.tsx";
import {AboutUs} from "../components/about-us/AboutUs.tsx";
import {Victory} from "../components/victory/Victory.tsx";
import {YandexMap} from "../components/yandex-map/YandexMap.tsx";

export const App: FC = () => {
    return (
        <>
            <LayoutProvider>
                <Main/>
                <div className={`section-top-28`}>
                    <CustomSection header={`О нас`} descSection={`Традиции и опыт`}>
                        <AboutUs/>
                    </CustomSection>
                </div>
                <div className={`section-top-28`}>
                    <CustomSection descSection={`Победы`}>
                        <Victory/>
                    </CustomSection>
                </div>
                <div className={`section-top-28`}>
                    <CustomSection descSection={`Местоположение`}>
                        <YandexMap/>
                    </CustomSection>
                </div>
                <div className={`section-top-28`}>
                    <CustomSection header={`Галерея`} descSection={`Наши Моменты`}>
                    </CustomSection>
                </div>
            </LayoutProvider>
        </>
    )
}