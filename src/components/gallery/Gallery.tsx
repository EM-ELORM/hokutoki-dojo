import './index.css'
import './index.adaptive.css'
import gallery from "../../moki/gallery.json";
import {getImageUrl} from "../../libs/utils.ts";

export const Gallery = () => {
    const data = gallery;

    return (
        <div className={`pos-gallery`}>
            <div className={`content-gallery`}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`img-gallery ${index >= data.length - 2 ? `scale-gallery-one` : `scale-gallery-two`}`}
                        style={{backgroundImage: `url(${getImageUrl(item.img, `png`)})`}}
                    ></div>
                ))}
            </div>
        </div>
    )
}
