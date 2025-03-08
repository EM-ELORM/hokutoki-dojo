import './index.css'
import {FC} from "react";
import {CustomSectionPropsOne} from "@/interface";

export const CustomSectionOne: FC<CustomSectionPropsOne> = (
    {
        header,
        descSection,
        children,
        id
    }
) => {
    return (
        <section className={`main-center`} id={id}>
            <div className={`main-container`}>
                <div className={`center-custom-section`}>
                    {header && (
                        <div className={`header-section-one`}>{header}</div>
                    )}
                    {descSection && (
                        <>
                            <div className={`desc-section-one mt-8`}>{descSection}</div>
                            <div className={`line-desc-section-one`}></div>
                        </>
                    )}
                    {children}
                </div>
            </div>
        </section>
    )
}
