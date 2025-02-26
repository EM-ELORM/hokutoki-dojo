import './index.css';
import './index.adaptive.css'
import { FC } from 'react';
import traditionsAndExp from '../../moki/traditionsAndExperience.json';

export const AboutUs: FC = () => {
    const { globalImg, items } = traditionsAndExp;

    const filteredItems = items.filter((item) => item.description);

    const sortedItems = [...filteredItems].sort((a, b) => (a.description!.length - b.description!.length));

    return (
        <div className="pos-about-us">
            <div className="content-about-us">
                {sortedItems.map((item, index) => (
                    <div
                        key={index}
                        className={`block-content ${index === sortedItems.length - 1 ? "last-item" : ""}`}
                    >
                        <div className={`icon bg-[url('/img/svg/${globalImg}')]`}></div>
                        <p className={`text-gray-700`}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
