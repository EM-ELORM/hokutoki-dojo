import './index.css';
import './index.adaptive.css'
import { FC } from 'react';
import traditionsAndExp from '../../moki/traditionsAndExperience.json';
import {getImageUrl} from "../../libs/utils.ts";

export const AboutUs: FC = () => {
    const { globalImg, items } = traditionsAndExp;

    const filteredItems = items.filter((item) => item.description);

    const sortedItems = [...filteredItems].sort((a, b) => (a.description!.length - b.description!.length));

    return (
        <div className={`pos-about-us`}>
            <div className={`content-about-us`}>
                {sortedItems.map((item, index) => (
                    <div key={index} className={`block-content ${index === sortedItems.length - 1 ? "last-item" : ""}`}>
                        <div
                            className={`icon`}
                            style={{backgroundImage: `url(${getImageUrl(globalImg, "svg")})`}}
                        ></div>
                        <p className={`desc-about-us`}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
