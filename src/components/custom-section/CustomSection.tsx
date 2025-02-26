import './index.css'
import React, {FC} from "react";

interface CustomSectionProps {
    header?: string
    descSection?: string
    children?: React.ReactNode
}

export const CustomSection: FC<CustomSectionProps> = (
    {
        header,
        descSection,
        children
    }
) => {
    return (
        <div className={`main-center mt-28`}>
            <div className={`main-container`}>
                <div className={`center-custom-section`}>
                    {header && (
                        <div className={`header-section`}>{header}</div>
                    )}
                    {descSection && (
                        <>
                            <div className={`desc-section mt-8`}>{descSection}</div>
                            <div className={`line-desc-section`}></div>
                        </>
                    )}
                    {children}
                </div>
            </div>
        </div>
    )
}
