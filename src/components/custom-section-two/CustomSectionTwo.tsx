import {FC} from "react";
import {CustomSectionPropsTwo} from "@/interface";

export const CustomSectionTwo: FC<CustomSectionPropsTwo> = (
    {
        header,
        descSection,
        children,
        width,
        id
    }
) => {
    return (
        <section id={id} className={`main-center`}>
            <div className={`main-container`} style={width ? {width} : undefined}>
                <div className={`center-custom-section`}>
                    {header && (
                        <div className={`header-section-two`}>{header}</div>
                    )}
                    {descSection && (
                        <>
                            <div className={`desc-section-two`}>{descSection}</div>
                            <div className={`line-desc-section-two`}></div>
                        </>
                    )}
                    {children}
                </div>
            </div>
        </section>
    )
}
