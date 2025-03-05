import React, {FC} from "react";

interface CustomSectionProps {
    header?: string
    descSection?: string
    children?: React.ReactNode
    width?: string
}

export const CustomSectionTwo: FC<CustomSectionProps> = (
    {
        header,
        descSection,
        children,
        width
    }
) => {
    return (
        <section className={`main-center`}>
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
