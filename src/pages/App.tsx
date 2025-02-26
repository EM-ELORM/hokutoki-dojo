import {FC} from "react";
import {Main} from "../components/main/Main.tsx";
import {LayoutProvider} from "../context/LayoutProvider.tsx";
import {CustomSection} from "../components/custom-section/CustomSection.tsx";
import {AboutUs} from "../components/about-us/AboutUs.tsx";

export const App: FC = () => {
    return (
        <>
            <LayoutProvider>

                <Main/>

                <CustomSection
                    header={`О нас`}
                    descSection={`Традиции и опыт`}
                >
                    <AboutUs/>
                </CustomSection>

                <CustomSection
                    descSection={`Победы`}
                >
                </CustomSection>

            </LayoutProvider>
        </>
    )
}