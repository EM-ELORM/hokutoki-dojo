import './index.css'
import './index.adaptive.css'
import victory from "../../moki/victory.json";
import {getImageUrl} from "../../libs/utils.ts";

export const Victory = () => {
    const data = victory;

    return (
        <div className={`pos-win`}>
            <div className={`content-win`}>
                {data.map((item, index) => (
                    <div key={index}>
                        <div
                            className={`img-victory`}
                            style={{backgroundImage: `url(${getImageUrl(item.img, "png")})`}}
                        ></div>
                        <div className={`desc-center-win`}>
                            <p className={`text-desc-win`}>Место: {item.place}</p>
                            <p className={`text-desc-win`}>Имя: {item.name}</p>
                            <p className={`text-desc-win`}>Год: {item.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
