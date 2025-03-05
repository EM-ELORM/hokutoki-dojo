import './index.css'
import './index.adaptive.css'
import {FC} from "react";
import reviews from "@moki/reviews.json"
import {getImageUrl} from "@/libs/utils.ts";

export const Reviews: FC = () => {
    const data = reviews

    return (
        <div className={`pos-reviews`}>
            <div className={`square-scroll`}>
                <div className={`distance-reviews scroll-hide`}>
                    {data.map((item) => (
                        <div className={`content-reviews`}>
                            <div className={`img-reviews-content`}
                                 style={{backgroundImage: `url(${getImageUrl("user.png", `png`)})`}}></div>
                            <div className={`pos-content-reviews`}>
                                <span className={`font-bold`}>{item.name}</span>
                                <span>{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`line-reviews`}></div>
        </div>
    )
}
