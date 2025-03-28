import './index.css';
import './index.adaptive.css';
import victory from "@moki/victory.json";
import {getImageUrl} from "@/libs/utils.ts";

export const Victory = () => {
    return (
        <div className={`pos-win`}>
            <div className={`content-win`}>
                {victory.map((item, index) => (
                    <div key={index} className={`victory-item`}>
                        <div
                            className={`img-victory`}
                            style={{backgroundImage: `url(${getImageUrl(item.img, "jpg")})`}}
                        ></div>
                        <div className={`desc-center-win`}>
                            {item.name && <p className={`text-desc-win`}>{item.name}</p>}
                            <p className={"text-desc-win"}>{item.winners}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
