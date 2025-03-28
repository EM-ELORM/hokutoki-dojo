import {FC} from "react";
import {LayoutProvider} from "@/context/LayoutProvider.tsx";
import {Main} from "@components/main/Main.tsx";
import {CustomSectionOne} from "@components/custom-section-one/CustomSectionOne.tsx";
import {AboutUs} from "@components/about-us/AboutUs.tsx";
import {Victory} from "@components/victory/Victory.tsx";
import {YandexMap} from "@components/yandex-map/YandexMap.tsx";
import {Gallery} from "@components/gallery/Gallery.tsx";
import {CustomSectionTwo} from "@components/custom-section-two/CustomSectionTwo.tsx";
import {Price} from "@components/price/Price.tsx";
import {Schedule} from "@components/schedule/Schedule.tsx";
import {Reviews} from "@components/reviews/Reviews.tsx";
import {ContactUs} from "@components/contact-us/ContactUs.tsx";
import {Footer} from "@components/footer/Footer.tsx";
import {ScrollUpButton} from "@components/scroll-up-button/ScrollUpButton.tsx";

export const App: FC = () => {
    return (
        <>
            <LayoutProvider>
                <Main/>
                <div className={`section-m-top-28`}>
                    <CustomSectionOne id={`about-us`} header={`О нас`} descSection={`Традиции и опыт`}>
                        <AboutUs/>
                    </CustomSectionOne>
                </div>
                <div className={`section-m-top-28`}>
                    <CustomSectionOne id={`victory`} descSection={`Достижения`}>
                        <Victory/>
                    </CustomSectionOne>
                </div>
                <div className={`section-m-top-28`}>
                    <CustomSectionOne id={`yandex-map`} descSection={`Местоположение`}>
                        <YandexMap/>
                    </CustomSectionOne>
                </div>
                <div className={`section-m-top-28`}>
                    <CustomSectionOne id={`gallery`} header={`Галерея`} descSection={`Наши Моменты`}>
                        <Gallery/>
                    </CustomSectionOne>
                </div>
                <div className={`section-m-top-28`}>
                    <div className={`bg-section-two`}>
                        <div className={`section-p-top-28`}>
                            <CustomSectionTwo id={`price`} header={`Расписание и стоимость`} descSection={`Стоимость`}>
                                <Price/>
                            </CustomSectionTwo>
                        </div>
                        <div className={`section-m-top-28`}>
                            <CustomSectionTwo id={`schedule`} descSection={`Время проведения тренировок`}>
                                <Schedule/>
                            </CustomSectionTwo>
                        </div>
                        <div className={`section-m-top-28`}>
                            <CustomSectionTwo id={`reviews`} header={`Отзывы`} descSection={`Наши оценки`}>
                                <Reviews/>
                            </CustomSectionTwo>
                        </div>
                    </div>
                    <div className={`bg-gradient`}>
                        <div className={`section-p-top-28`}>
                            <CustomSectionTwo id={`contact`} header={`Контакты`} descSection={`Связаться с нами`} width={`1275px`}>
                                <ContactUs/>
                            </CustomSectionTwo>
                        </div>
                    </div>
                    <div className={`bg-footer`}>
                        <div className={`section-p-top-28`}>
                            <Footer/>
                        </div>
                    </div>
                </div>
                <ScrollUpButton/>
            </LayoutProvider>
        </>
    )
}